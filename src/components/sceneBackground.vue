<template>
<div id="scene-container" ref="sceneContainer"></div>
</template>

<script>
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap, Power3 } from "gsap";
export default {
    name: "HelloWorld",
    props: ["windowsOpen", "loading"],
    emits: ["modelsLoaded"],
    data() {
        return {
            loader: new GLTFLoader(),
            loadCount: 0,
            container: null,
            scene: null,
            camera: null,
            controls: null,
            renderer: null,
            stats: null,
            moon: null,
            satelite: null,
            starDome: null,
            stars: null,
            moonModel: require("@/assets/models/moon.glb"),
            sateliteModel: require("@/assets/models/satelite.glb"),
            starImage: require("@/assets/stars.jpg"),
        };
    },
    methods: {

        init() {
            // set container
            this.container = this.$refs.sceneContainer;

            // add camera
            const fov = 60; // Field of view
            const aspect = this.container.clientWidth / this.container.clientHeight;
            const near = 0.1; // the near clipping plane
            const far = 60; // the far clipping plane
            const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

            this.camera = camera;
            this.camera.position.set(0, 0, 10);
            // create scene
            this.scene = new THREE.Scene();

            // add lights
            const ambientLight = new THREE.HemisphereLight(
                0xffffff, // bright sky color
                0x222222, // dim ground color
                1 // intensity
            );
            const mainLight = new THREE.DirectionalLight(0xffffff, 4.0);
            mainLight.position.set(10, 10, 10);
            this.scene.add(ambientLight, mainLight);

            // create renderer
            this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
            this.renderer.setSize(
                this.container.clientWidth,
                this.container.clientHeight
            );
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.gammaFactor = 2.2;
            this.renderer.outputEncoding = THREE.sRGBEncoding;
            this.renderer.physicallyCorrectLights = true;
            this.container.appendChild(this.renderer.domElement);

            // set aspect ratio to match the new browser window aspect ratio
            this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(
                this.container.clientWidth,
                this.container.clientHeight
            );

            // create stars
            var textureloader = new THREE.TextureLoader();
            textureloader.load(this.starImage, (texture) => {
                texture.wrapS = THREE.RepeatWrapping;
                texture.wrapT = THREE.RepeatWrapping;
                texture.repeat.set(3, 3, 3);
                var geometry = new THREE.SphereGeometry(30, 30, 30);
                var material = new THREE.MeshBasicMaterial({
                    map: texture,
                    color: 0x1a1a22,
                    hading: THREE.FlatShading,
                    side: THREE.BackSide,
                    alphaTest: 0.1,
                    alpha: true,
                });
                material.depthWrite = false;
                this.$emit('modelsLoaded')
                this.starDome = new THREE.Mesh(geometry, material);
                this.scene.add(this.starDome);
            });

            this.renderer.setAnimationLoop(() => {
                this.starDome ? (this.starDome.rotation.y += 0.0005) : null;
                this.moon ? (this.moon.rotation.y += 0.001) : null;
                this.satelite ? (this.satelite.rotation.y += 0.01) : null;
                this.render();
            });
        },
        render() {
            this.renderer.render(this.scene, this.camera);
        },
        loadSatelite() {
            this.loader.load(this.sateliteModel, (gltf) => {
                this.satelite = gltf.scene;
                this.scene.add(this.satelite);
                this.satelite.scale.set(0.03, 0.03, 0.03);
                this.satelite.position.x = 18;
            });
        },
        loadMoon() {
            this.loader.load(this.moonModel, (gltf) => {
                this.moon = gltf.scene;
                this.scene.add(this.moon);
                this.moon.position.x = 18;
            });

        }
    },
    watch: {
        loading(val) {
            this.loadMoon()
        },
        moon(val) {
            gsap.to(this.moon.position, { x: 4, duration: 3 }).then(() => {
                this.loadSatelite()
            })
        },

        windowsOpen: {
            deep: true,
            handler(val) {
                if (val.portfolio) {
                    gsap.to(this.moon.position, { x: 0, y: -6, z: 3, duration: 2 });
                    gsap.to(this.satelite.position, { x: 18, duration: 2 })
                }
                if (val.contact) {
                    gsap.to(this.moon.position, { x: -15, y: 0, z: 0, duration: 2 });
                    this.satelite ? gsap.to(this.satelite.position, { x: 6, duration: 2 }) : null
                }
                if (!val.contact && !val.portfolio && !val.about) {
                    gsap.to(this.moon.position, { x: 4, y: 0, z: 0, duration: 2 });
                    gsap.to(this.satelite.position, { x: 18, duration: 2 })
                }
            },
        },
    },
    mounted() {
        this.init();
    },
};
</script>

<style scoped>
#scene-container {
    height: 100%;
    width: 100%;
    opacity: 0.6;
    position: fixed;
}
</style>
