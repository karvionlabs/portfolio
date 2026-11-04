import * as THREE from 'three';
import Application from '../Application';
import Time from '../Utils/Time';
import UIEventBus from '../UI/EventBus';
import AudioManager from '../Audio/AudioManager';

export default class Robot {
    application: Application;
    scene: THREE.Scene;
    time: Time;
    audioManager: AudioManager;
    group: THREE.Group;
    sprite: THREE.Sprite;
    material: THREE.SpriteMaterial;
    antennaLight: THREE.PointLight;

    basePosition: THREE.Vector3;
    targetOpacity: number = 1;
    currentOpacity: number = 1;

    lastTypingSoundTime: number = 0;
    typingSequenceCount: number = 0;

    constructor() {
        this.application = new Application();
        this.scene = this.application.scene;
        this.time = this.application.time;

        // Positioned sitting directly on the brown office chair cushion, typing towards the desk
        this.basePosition = new THREE.Vector3(765, -520, 2400);
        this.init();
    }

    init() {
        this.group = new THREE.Group();
        this.group.position.copy(this.basePosition);

        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load('/images/robot_typing_char_2k.png');
        texture.encoding = THREE.sRGBEncoding;
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.anisotropy = 16;

        this.material = new THREE.SpriteMaterial({
            map: texture,
            transparent: true,
            opacity: 1,
            depthWrite: false,
        });

        // 2K Ultra-sharp sprite matching enlarged chair cushion and desk proportions
        // Aspect ratio 966:1850 -> 0.5222
        this.sprite = new THREE.Sprite(this.material);
        this.sprite.scale.set(1150, 2200, 1);
        // Anchor at robot hips/cushion contact (0.68 horizontal, 0.38 vertical)
        this.sprite.center.set(0.68, 0.38);
        this.group.add(this.sprite);

        // Glowing cyan light above antenna tip
        this.antennaLight = new THREE.PointLight(0x00f0ff, 1.2, 600);
        this.antennaLight.position.set(-60, 680, 50);
        this.group.add(this.antennaLight);

        this.scene.add(this.group);

        // Smooth fade out when entering monitor mode so it doesn't block the screen
        UIEventBus.on('enterMonitor', () => {
            this.targetOpacity = 0;
        });

        // Smooth fade in when leaving monitor mode
        UIEventBus.on('leftMonitor', () => {
            this.targetOpacity = 1;
        });
    }

    update() {
        if (!this.group || !this.material) return;

        const t = this.time.elapsed * 0.005;

        // Subtle typing micro-bobbing and idle breathing
        const typingJitter = (Math.sin(t * 12) > 0.7 ? 1.5 : 0);
        this.group.position.y = this.basePosition.y + Math.sin(t * 1.5) * 4 + typingJitter;
        this.group.position.z = this.basePosition.z + Math.cos(t * 1.2) * 2;

        // Subtle antenna light pulse
        if (this.antennaLight) {
            this.antennaLight.intensity = (0.7 + Math.sin(t * 2.5) * 0.3) * this.currentOpacity;
        }

        // Smooth opacity transition
        if (Math.abs(this.currentOpacity - this.targetOpacity) > 0.01) {
            this.currentOpacity += (this.targetOpacity - this.currentOpacity) * 0.1;
            this.material.opacity = this.currentOpacity;
            this.group.visible = this.currentOpacity > 0.02;
        }

        // Occasional gentle mechanical keyboard typing sounds while sitting at the desk
        if (this.currentOpacity > 0.8 && this.time.elapsed - this.lastTypingSoundTime > 3200) {
            this.lastTypingSoundTime = this.time.elapsed + (Math.random() * 2000);
            const audioMgr = this.application.world?.audioManager;
            if (audioMgr) {
                const keyNum = Math.floor(Math.random() * 6) + 1;
                audioMgr.playAudio(`keyboardKeydown${keyNum}`, {
                    volume: 0.08,
                    pitch: 1.0 + (Math.random() * 0.2 - 0.1),
                    position: new THREE.Vector3(560, -300, 1600),
                });
            }
        }
    }
}
