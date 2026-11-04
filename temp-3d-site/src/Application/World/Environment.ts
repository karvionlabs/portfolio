import * as THREE from 'three';
import Application from '../Application';
import BakedModel from '../Utils/BakedModel';
import Resources from '../Utils/Resources';

export default class Environment {
    application: Application;
    scene: THREE.Scene;
    resources: Resources;
    bakedModel: BakedModel;

    constructor() {
        this.application = new Application();
        this.scene = this.application.scene;
        this.resources = this.application.resources;

        this.bakeModel();
        this.setModel();
    }

    bakeModel() {
        this.bakedModel = new BakedModel(
            this.resources.items.gltfModel.environmentModel,
            this.resources.items.texture.environmentTexture,
            900
        );
    }

    setModel() {
        const model = this.bakedModel.getModel();

        // Scale up the chair (chair_base and chair_seat) by 1.25x to make it prominent and executive
        const CHAIR_SCALE = 1.25;
        const X_CENTER = 765;
        const Z_CENTER = 2400;
        const Y_FLOOR = -2995;

        model.traverse((child) => {
            if (child.name === 'chair_base' || child.name === 'chair_seat') {
                const currentScale = child.scale.x; // 900
                const newScale = currentScale * CHAIR_SCALE;
                child.scale.set(newScale, newScale, newScale);

                // Offset to keep base on floor and centered
                child.position.x = (1 - CHAIR_SCALE) * X_CENTER;
                child.position.y = (1 - CHAIR_SCALE) * Y_FLOOR - 150;
                child.position.z = (1 - CHAIR_SCALE) * Z_CENTER;
            }
        });

        this.scene.add(model);
    }

    update() {}
}
