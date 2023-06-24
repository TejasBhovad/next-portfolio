"use client";
import { Model } from "@public/Model";
import { React, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Plane,
  Shape,
} from "@react-three/drei";
import "@styles/components/char.scss";
import { EffectComposer, Bloom, Outline } from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";
import { PlaneBufferGeometry } from "react-three-fiber";

function Box(props) {
  return (
    <Model
      rotation={[-Math.PI / 2 + 0.25, Math.PI + 0.15, 0]}
      position={[0, 0, 2.25]}
      {...props}
      scale={5}
    ></Model>
  );
}
function Character() {
  let yCord = 8;

  return (
    <div className="char-view">
      {/* Simple three js scene */}
      <Canvas className="char-view">
        <OrbitControls
          enableDamping={false}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
        <ambientLight intensity={0.4} color={"#ffffff"} />
        {/* <directionalLight
          intensity={0.5}
          position={[0, 6, -5]}
          color={"#37a6e6"}
          castShadow
          receiveShadow
        /> */}
        <PerspectiveCamera makeDefault position={[0, yCord, 0]} />
        {/* Char goes here */}
        <Box />
        <EffectComposer>
          <Outline blur={true} edgeStrength={25} blendFunction={16} />
          <Bloom />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default Character;
