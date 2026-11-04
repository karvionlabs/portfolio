import * as THREE from 'three';

export default class BakedModel {
    model: LoadedModel;
    texture: LoadedTexture;
    material: THREE.MeshBasicMaterial;

    constructor(model: LoadedModel, texture: LoadedTexture, scale?: number) {
        this.model = model;
        this.texture = texture;

        this.texture.flipY = false;
        this.texture.encoding = THREE.sRGBEncoding;
        this.texture.generateMipmaps = true;
        this.texture.minFilter = THREE.LinearMipmapLinearFilter;
        this.texture.magFilter = THREE.LinearFilter;
        this.texture.anisotropy = 16;

        this.material = new THREE.MeshBasicMaterial({
            map: this.texture,
        });

        this.model.scene.traverse((child) => {
            if (child instanceof THREE.Mesh) {
                if (scale) child.scale.set(scale, scale, scale);
                child.material.map = this.texture;
                child.material = this.material;
            }
        });

        return this;
    }

    getModel(): THREE.Group {
        return this.model.scene;
    }
}
