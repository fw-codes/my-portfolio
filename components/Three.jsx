"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"

export default function ThreeText() {
  const mountRef = useRef(null)

  useEffect(() => {
    let scene, camera, renderer, group
    let mixer
    let actions = {}
    let activeAction

    scene = new THREE.Scene()
    scene.background = null

    camera = new THREE.PerspectiveCamera(
      30,
      500 / 400,
      1,
      1500
    )
    camera.position.set(0, 150, 500)

    // Lights
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 2)
    hemiLight.position.set(0, 200, 0)
    scene.add(hemiLight)

    const dirLight = new THREE.DirectionalLight(0xffffff, 3)
    dirLight.position.set(0, 200, 100)
    scene.add(dirLight)

    group = new THREE.Group()
    scene.add(group)

    // Load robot model
    const loader = new GLTFLoader()

    loader.load("/robot.glb", (gltf) => {
      const model = gltf.scene

      model.scale.set(45, 45, 45)
      model.position.set(40, 55, 0)

      group.add(model)

      mixer = new THREE.AnimationMixer(model)

      gltf.animations.forEach((clip) => {
        actions[clip.name] = mixer.clipAction(clip)
      })

      // Start walking
     const walkAction = actions["Walking"];
const thumbsAction = actions["ThumbsUp"];

walkAction.play();

function playThumbsUp() {
  walkAction.fadeOut(0.2);

  thumbsAction.reset();
  thumbsAction.setLoop(THREE.LoopOnce);
  thumbsAction.clampWhenFinished = true;
  thumbsAction.play();

  mixer.addEventListener("finished", restoreWalk);
}

function restoreWalk() {
  mixer.removeEventListener("finished", restoreWalk);
  walkAction.reset().fadeIn(0.2).play();
}

setInterval(playThumbsUp, 3000);
    })

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    mountRef.current.innerHTML = " "
    renderer.setSize(500, 400)
    mountRef.current.appendChild(renderer.domElement)

    function animate() {
      requestAnimationFrame(animate)

      if (mixer) mixer.update(0.01)

      renderer.render(scene, camera)
    }

    animate()

    return () => {
      mountRef.current?.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="three-container" />
}