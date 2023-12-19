import style from "../solarEnergy/solarEnergyPage.module.css";
import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {WindTurbineModel} from "../../../models/windTurbine/Scene";
import ModelLoader from "../../general/modelLoader/modelLoader";

const WindTurbineFunnishModel = () => {
    return (
        <div className={style.wrapper}>
            <Suspense fallback={<ModelLoader/>}>
                <Canvas
                    camera={{
                        position: [
                            0,
                            300,
                            300,
                        ],
                        zoom:24
                    }}>
                    <OrbitControls enablePan={false} />

                    <directionalLight position={[1,0,0]} args={['white',5]}/>
                    <directionalLight position={[0,1,0]} args={['white',5]}/>
                    <directionalLight position={[0,0,1]} args={['white',5]}/>
                    <directionalLight position={[-1,0,0]} args={['white',5]}/>
                    <directionalLight position={[0,-1,0]} args={['white',5]}/>
                    <directionalLight position={[0,0,-1]} args={['white',5]}/>

                    <WindTurbineModel position={[0,-7,0]} />
                </Canvas>
            </Suspense>
        </div>
    )
}

export default WindTurbineFunnishModel;