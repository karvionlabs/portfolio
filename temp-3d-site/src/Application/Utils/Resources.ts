import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Application from '../Application';
import UIEventBus from '../UI/EventBus';
import EventEmitter from './EventEmitter';
import Loading from './Loading';

export default class Resources extends EventEmitter {
    sources: Resource[];
    // Not sure about this one
    items: {
        texture: { [name: string]: LoadedTexture };
        cubeTexture: { [name: string]: LoadedCubeTexture };
        gltfModel: { [name: string]: LoadedModel };
        audio: { [name: string]: LoadedAudio };
    };
    toLoad: number;
    loaded: number;
    isReady: boolean;
    loaders: {
        gltfLoader: GLTFLoader;
        textureLoader: THREE.TextureLoader;
        cubeTextureLoader: THREE.CubeTextureLoader;
        audioLoader: THREE.AudioLoader;
    };
    application: Application;
    loading: Loading;

    constructor(sources: Resource[]) {
        super();

        this.sources = sources;

        this.items = { texture: {}, cubeTexture: {}, gltfModel: {}, audio: {} };
        this.toLoad = this.sources.length;
        this.loaded = 0;
        this.isReady = false;
        this.application = new Application();
        this.loading = this.application.loading;

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {
            gltfLoader: new GLTFLoader(),
            textureLoader: new THREE.TextureLoader(),
            cubeTextureLoader: new THREE.CubeTextureLoader(),
            audioLoader: new THREE.AudioLoader(),
        };
    }

    startLoading() {
        const handledSources = new Set<string>();

        const handleLoad = (source: Resource, file?: LoadedResource) => {
            if (handledSources.has(source.name)) return;
            handledSources.add(source.name);
            this.sourceLoaded(source, file);
        };

        // Load each source with timeout protection
        for (const source of this.sources) {
            // Per-asset failsafe timer: max 3.5 seconds per asset
            const timer = setTimeout(() => {
                if (!handledSources.has(source.name)) {
                    console.warn(`[Resources] Asset timeout for "${source.name}". Skipping to unblock render.`);
                    handleLoad(source, undefined);
                }
            }, 3500);

            if (source.type === 'gltfModel') {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) => {
                        clearTimeout(timer);
                        handleLoad(source, file);
                    },
                    undefined,
                    (err) => {
                        clearTimeout(timer);
                        console.warn(`[Resources] Error loading GLTF "${source.name}":`, err);
                        handleLoad(source, undefined);
                    }
                );
            } else if (source.type === 'texture') {
                this.loaders.textureLoader.load(
                    source.path,
                    (file) => {
                        clearTimeout(timer);
                        file.encoding = THREE.sRGBEncoding;
                        handleLoad(source, file);
                    },
                    undefined,
                    (err) => {
                        clearTimeout(timer);
                        console.warn(`[Resources] Error loading texture "${source.name}":`, err);
                        handleLoad(source, undefined);
                    }
                );
            } else if (source.type === 'cubeTexture') {
                this.loaders.cubeTextureLoader.load(
                    source.path,
                    (file) => {
                        clearTimeout(timer);
                        handleLoad(source, file);
                    },
                    undefined,
                    (err) => {
                        clearTimeout(timer);
                        console.warn(`[Resources] Error loading cubeTexture "${source.name}":`, err);
                        handleLoad(source, undefined);
                    }
                );
            } else if (source.type === 'audio') {
                this.loaders.audioLoader.load(
                    source.path,
                    (buffer) => {
                        clearTimeout(timer);
                        handleLoad(source, buffer);
                    },
                    undefined,
                    (err) => {
                        clearTimeout(timer);
                        console.warn(`[Resources] Audio load failed/blocked for "${source.name}":`, err);
                        handleLoad(source, undefined);
                    }
                );
            }
        }

        // Global fallback: Ensure the 3D room ALWAYS loads within 4 seconds max
        setTimeout(() => {
            if (!this.isReady) {
                console.warn(`[Resources] Global fallback triggered. Loaded ${this.loaded}/${this.toLoad}. Initializing 3D room.`);
                this.isReady = true;
                this.trigger('ready');
            }
        }, 4000);
    }

    sourceLoaded(source: Resource, file?: LoadedResource) {
        if (file) {
            this.items[source.type][source.name] = file;
        }

        this.loaded++;

        this.loading.trigger('loadedSource', [
            source.name,
            this.loaded,
            this.toLoad,
        ]);

        if (this.loaded >= this.toLoad && !this.isReady) {
            this.isReady = true;
            this.trigger('ready');
        }
    }
}
