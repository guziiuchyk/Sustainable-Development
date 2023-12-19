import React from "react";
import { useGLTF } from "@react-three/drei";

export function SolarPanelModel(props) {
    const { nodes, materials } = useGLTF("/models/solarPanel/solarPanel.glb");
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.SolarPanel_SolarPanel_0.geometry}
                material={materials.SolarPanel}
                position={[0, 12.206, 35.525]}
                rotation={[-Math.PI / 4, 0, 0]}
            />
        </group>
    );
}

useGLTF.preload("/models/solarPanel/solarPanel.glb");

