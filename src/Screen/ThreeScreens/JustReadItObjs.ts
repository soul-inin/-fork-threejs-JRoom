import { scene } from "./ThreeScene"
import * as THREE from "three"
import { DoubleSide } from "three"
import { GLTFModelLoader } from "../../Components/ThreeModules/GLTFModelLoader"
import { FontLoder } from "../../Components/ThreeModules/FontLoader"
import { addSelectBtn } from "../../Components/ThreeModules/SelectBtn"
import { addLogoBox } from "../../Components/ThreeModules/LogoBox"
import nodeLogo from "../../resources/images/nodeLogo.jpg"
import mongoLogo from "../../resources/images/mongoLogo.jpg"
import jsLogo from "../../resources/images/vanillajs.png"
import herokuLogo from "../../resources/images/herokuLogo.png"
import { addFloor } from "../../Components/ThreeModules/floor"
import floorImage3 from "../../resources/images/floor3.jpg"
import { addFrame } from "../../Components/ThreeModules/Frame"
import hackathonLogo from "../../resources/images/nomad_hackathon.png"

export const JustReadItObjs = () => {
  const IntroVideo = document.createElement("video")
  IntroVideo.src = "/backgroundVideos/just-read-it.mp4"
  IntroVideo.autoplay = true
  IntroVideo.loop = true

  const videoTexture = new THREE.VideoTexture(IntroVideo)
  videoTexture.minFilter = THREE.LinearFilter
  videoTexture.magFilter = THREE.LinearFilter
  videoTexture.format = THREE.RGBFormat
  const rectangleGeo = new THREE.PlaneBufferGeometry(1600, 900)
  const rectangleMat = new THREE.MeshBasicMaterial({ map: videoTexture, toneMapped: false })
  rectangleMat.side = DoubleSide
  videoTexture.needsUpdate = true
  rectangleMat.needsUpdate = true

  const videoMesh = new THREE.Mesh(rectangleGeo, rectangleMat)
  videoMesh.rotateY(Math.PI / 2)
  videoMesh.position.set(-4300, 500, -2500)
  scene.add(videoMesh)

  // 스켈레톤 책장 모델
  GLTFModelLoader({
    modelUrl: "/models/bookshelf_household_props_12 (1)/scene.gltf",
    scale: { x: 1, y: 1, z: 1 },
    position: { x: -2000, y: -510, z: -4005 },
    rotation: { x: 0, y: 0, z: 0 },
  })

  // 일반 책장 모델
  GLTFModelLoader({
    modelUrl: "/models/the_witchs_bookshelf/scene.gltf",
    scale: { x: 100, y: 100, z: 100 },
    position: { x: -3500, y: -500, z: -3900 },
    rotation: { x: 0, y: -Math.PI / 2, z: 0 },
  })

  // 책상 모델
  GLTFModelLoader({
    modelUrl: "/models/table_with_things/scene.gltf",
    scale: { x: 80, y: 80, z: 80 },
    position: { x: -3000, y: -500, z: -2500 },
    rotation: { x: 0, y: -Math.PI / 2, z: 0 },
  })

  // 의자 모델
  GLTFModelLoader({
    modelUrl: "/models/armchair/scene.gltf",
    scale: { x: 6, y: 6, z: 6 },
    position: { x: -3000, y: -400, z: -2000 },
    rotation: { x: 0, y: Math.PI, z: 0 },
  })

  // 프로젝트 제목 폰트모델
  FontLoder(
    {
      fontModelUrl: "/fonts/helvetiker_regular.typeface.json",
      text: "Just-Read-It",
      size: 80,
      height: 50,
      color: 0xff991f,
      bevelSize: 7,
    },
    { x: -3500, y: 700, z: -4000 }
  )

  addLogoBox({ x: -2700, y: 500, z: -1100 }, nodeLogo)
  addLogoBox({ x: -3000, y: 500, z: -1100 }, mongoLogo)
  addLogoBox({ x: -3000, y: 200, z: -1100 }, jsLogo)
  addLogoBox({ x: -2700, y: 200, z: -1100 }, herokuLogo)

  // 프로젝트 선택 버튼
  addSelectBtn({
    text: "4",
    btnPosition: { x: -1500, y: 0, z: -2500 },
    cameraPosition: window.matchMedia("(max-width: 700px)").matches
      ? { x: -1600, y: 500, z: -2500 }
      : { x: -2000, y: 500, z: -2500 },
    targetPosition: { x: -3000, y: 500, z: -2500 },
    zoomIndex: 0.2,
  })

  // 방문 모델 로드
  GLTFModelLoader({
    modelUrl: "/models/door/scene.gltf",
    scale: { x: 600, y: 300, z: 300 },
    position: { x: -1490, y: -500, z: -2500 },
    rotation: { x: 0, y: 0, z: 0 },
  })

  // 방문 조명
  const doorLight = new THREE.PointLight(0xffffff, 2, 300)
  doorLight.position.set(-1470, 200, -2500)
  scene.add(doorLight)

  addFloor({ width: 3000, height: 2900, x: 3000, y: -490, z: -2500, imageSrc: floorImage3 }) // Just-Read-It 바닥

  addFrame({
    imageUrl: hackathonLogo,
    position: { x: -1510, y: 800, z: -2500 },
    rotateY: -Math.PI,
  })
}
