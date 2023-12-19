import style from './solarEnergyPage.module.css'
import Header from "../../general/header/header";
import React, {useState} from "react";
import Footer from "../../general/footer/footer";
import SolarPanelFinnishModel from "./solarPanelFinnishModel";
import fullScreenImage from '../../../imgs/fullscreen.png'
import useWindowDimensions from "../../../utils/useWindowDimensions";
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
                <div style={width600} className={style.solarPanelWrapper}>
                    <SolarPanelFinnishModel/>
                    <button onClick={handleClickButton} className={style.isFullScreenButton}><img className={style.isFullScreenButton__img} src={fullScreenImage} alt=""/></button>
                </div>
                {isFullScreen ? <div className={style.textWrapper}>
                    <div className={style.title}>Solar panels</div>
                    <div className={style.text}>Solar panels, also known as photovoltaic panels, are devices that convert sunlight into electricity. These panels consist of multiple solar cells made from semiconductor materials, such as silicon. When sunlight hits these cells, it excites electrons, creating a flow of electricity. Solar panels are an eco-friendly and sustainable way to generate electricity, harnessing the abundant energy from the sun to power homes, businesses, and even entire cities. Their use helps reduce reliance on fossil fuels, mitigating environmental impact and contributing to a cleaner, greener future.
                    </div>
                </div> : ''}
            </div>
        <Footer/>
    </div>
    )
}

export default SolarEnergy;