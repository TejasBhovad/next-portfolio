"use client";
import { React, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Shape } from "@react-three/drei";
import "@styles/components/model.scss";
import {
  DepthOfField,
  EffectComposer,
  Bloom,
  SMAA,
  Outline,
  GodRays,
} from "@react-three/postprocessing";
import { useFrame } from "@react-three/fiber";

function Sphere() {
  const meshRef = useRef();
  useFrame(() => {
    if (!meshRef.current) {
      return;
    }

    // instead of rotating by a fixed amount rotate randomly
    meshRef.current.rotation.y += Math.random() * 0.01;
    meshRef.current.rotation.x += Math.random() * 0.01;
    meshRef.current.rotation.z += Math.random() * 0.01;
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 80, 16]} />
      {/* <boxGeometry args={[1, 1, 1]} /> */}
      <meshStandardMaterial
        color={"#37a6e6"}
        roughness={0.85}
        metalness={0.125}
      />
    </mesh>
  );
}

function ModelViewer() {
  let yCord = 2.5;

  return (
    <div className="model-view">
      <div className="circle"></div>
      <div className="title">&lt;T&gt;</div>
      {/* Simple three js scene */}
      <Canvas className="model-view">
        <OrbitControls
          enableDamping={false}
          enablePan={false}
          enableZoom={false}
          enableRotate={true}
        />
        <ambientLight intensity={0.4} color={"#ffffff"} />
        <directionalLight
          intensity={0.5}
          position={[0, 6, -5]}
          color={"#37a6e6"}
          castShadow
          receiveShadow
        />
        <PerspectiveCamera makeDefault position={[0, yCord, 0]} />

        <Sphere />
        {/* <Sphere /> */}
        <EffectComposer>
          <Outline blur={true} edgeStrength={25} blendFunction={1} />
          <Bloom />
          <DepthOfField
            focusDistance={1}
            focalLength={1}
            bokehScale={10}
            blendFunction={7}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default ModelViewer;
