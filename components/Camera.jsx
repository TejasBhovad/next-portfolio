import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";

const ZoomCamera = () => {
  // Function to zoom the camera towards the center
  const { camera } = useThree();
  const target = useRef();
  const zoomToCenter = () => {
    const distance = camera.position.distanceTo(target.current.position);
    camera.zoom = distance - 1.25; // Set the zoom level based on the distance
    camera.updateProjectionMatrix();
  };

  // Call zoomToCenter on every frame
  useFrame(zoomToCenter);

  return <mesh ref={target} />;
};

export default ZoomCamera;
