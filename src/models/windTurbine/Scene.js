import React from "react";
import { useGLTF } from "@react-three/drei";

export function WindTurbineModel(props) {
  const { nodes, materials } = useGLTF(
      "/models/windTurbine/windTurbine.glb"
  );
  return (
      <group {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Windmill}
            scale={[0.401, 0.401, 0.472]}
        />
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_6.geometry}
            material={materials.Windmill}
            position={[0, 13.162, 0.564]}
            scale={[0.401, 0.401, 0.472]}
        />
      </group>
  );
}

useGLTF.preload("/models/windTurbine/windTurbine.glb");