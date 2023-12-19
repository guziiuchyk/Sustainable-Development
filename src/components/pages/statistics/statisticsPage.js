import style from './statistics.module.css'
import Header from "../../general/header/header";
import Footer from "../../general/footer/footer";
import {useEffect, useState} from "react";
import axios from "axios";
const Statistics = () => {
    const [windEnergyStats, setWindEnergyStats] = useState('Loading...')
    const [solarEnergyStats, setSolarEnergyStats] = useState('Loading...')
    useEffect(() => {
        axios.get('https://api.fingrid.fi/v1/variable/248/event/json')
            .then(json => setSolarEnergyStats(json.data.value));
        axios.get('https://api.fingrid.fi/v1/variable/75/event/json')
            .then(json => setWindEnergyStats(json.data.value))
    }, []);
    return (
    <div>
        <Header/>
            <div className={style.wrapper}>
                <div className={style.text}>
                    <div className={style.title}>Statistics</div>
                    <div className={style.subTitle}>The average electricity production over the last hour:</div>
                    <div className={style.solarStats}>Production speed of solar panels: <span className={style.bold}>{solarEnergyStats}</span>MWh/h</div>
                    <div className={style.windStats}>Production speed of wind turbines: <span className={style.bold}>{windEnergyStats}</span>MWh/h</div>
                </div>
            </div>
        <Footer/>
    </div>
    )
}

export default Statistics;