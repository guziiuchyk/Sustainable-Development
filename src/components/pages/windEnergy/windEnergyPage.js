import style from './windEnergyPage.module.css'
import Header from "../../general/header/header";
import React, {useState} from "react";
import Footer from "../../general/footer/footer";
import fullScreenImage from '../../../imgs/fullscreen.png'
import useWindowDimensions from "../../../utils/useWindowDimensions";
import WindTurbineFunnishModel from "./windTurbineFunnishModel";
const SolarEnergy = () => {
    const [isFullScreen, setIsFullScreen] = useState(true)
    const {width} = useWindowDimensions()
    function handleClickButton(){
        console.log(!isFullScreen)
        setIsFullScreen(!isFullScreen)
    }
    let width600 = {}
    if (isFullScreen){
        if (width < 1200){
            width600 = {width:'400px'}
        }
        else {
            width600 = {width:'600px'}
        }
    }
    return (
        <div>
            <Header/>
            <div className={`${style.wrapper} ${isFullScreen ? style.grid : ''}`}>
                <div style={width600} className={style.windTurbineWrapper}>
                    <WindTurbineFunnishModel/>
                    <button onClick={handleClickButton} className={style.isFullScreenButton}><img className={style.isFullScreenButton__img} src={fullScreenImage} alt=""/></button>
                </div>
                {isFullScreen ? <div className={style.textWrapper}>
                    <div className={style.title}>Wind turbines</div>
                    <div className={style.text}>Wind turbines are innovative machines designed to harness the power of wind and convert it into electrical energy. These towering structures consist of blades, a rotor, and a generator. As the wind blows, it causes the blades to spin, rotating the rotor connected to a generator. This motion generates electricity, which can be fed into power grids for homes, businesses, and communities. Wind energy is a renewable and sustainable source of power that produces zero emissions, playing a crucial role in reducing reliance on fossil fuels and combating climate change. Wind turbines symbolize a clean and efficient way to produce electricity while utilizing the natural force of the wind.
                    </div>
                </div> : ''}
            </div>
            <Footer/>
        </div>
    )
}

export default SolarEnergy;