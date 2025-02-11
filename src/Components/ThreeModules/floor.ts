import * as THREE from "three"
import { scene } from "../../Screen/ThreeScreens/ThreeScene"
import floorImage2 from "../../resources/images/floor2.jpg"
import floorImage3 from "../../resources/images/floor3.jpg"

interface typeAddFloor {
  width: number
  height: number
  position?: object
  x: number
  y: number
  z: number
  imageSrc: string
}

export const addFloor = ({ width, height, x, y, z, imageSrc }: typeAddFloor) => {
  const floorGeo = new THREE.PlaneBufferGeometry(width, height)
  const floorTexture = new THREE.TextureLoader().load(imageSrc)
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping
  floorTexture.repeat.set(7, 7)
  floorTexture.encoding = THREE.sRGBEncoding

  const floorMaterial = new THREE.MeshPhongMaterial({
    map: floorTexture,
    specular: "orange",
    flatShading: true,
  })

  // 바닥 반사 효과
  const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(640, {
    format: THREE.RGBFormat,
    generateMipmaps: true,
    minFilter: THREE.LinearMipmapLinearFilter,
  })

  const floorCamera = new THREE.CubeCamera(500, 1500, cubeRenderTarget)
  floorCamera.position.set(0, 0, 0)
  scene.add(floorCamera)

  const floorMesh = new THREE.Mesh(floorGeo, floorMaterial)
  floorMesh.position.set(0, 100, 0)
  floorMesh.receiveShadow = true
  floorMesh.rotateX(-Math.PI / 2) // -90도 로테이션
  floorMesh.position.set(x, y, z) // 위치 조정
  scene.add(floorMesh)
}
