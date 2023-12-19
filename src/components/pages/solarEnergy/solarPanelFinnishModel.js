import ModelLoader from "../../general/modelLoader/modelLoader";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {SolarPanelModel} from "../../../models/solarPanel/Scene";
import React, {Suspense} from "react";

const SolarPanelFinnishModel = () => {
    return (
        <Suspense fallback={<ModelLoader/>}>
            <Canvas
                camera={{
                    position: [
                        0,
                        100,
                        100,
                    ],
                    zoom:0.6
                }}>
                <OrbitControls enablePan={false} />

                <directionalLight position={[1,0,0]} args={['white',5]}/>
                <directionalLight position={[0,1,0]} args={['white',5]}/>
                <directionalLight position={[0,0,1]} args={['white',5]}/>
                <directionalLight position={[-1,0,0]} args={['white',5]}/>
                <directionalLight position={[0,-1,0]} args={['white',5]}/>
                <directionalLight position={[0,0,-1]} args={['white',5]}/>

                <SolarPanelModel />
            </Canvas>
        </Suspense>
    )
}

export default SolarPanelFinnishModel;