import style from './home.module.css';
import Header from "../../general/header/header";
import heroImg from '../../../imgs/home__hero.png';
import whyImg from '../../../imgs/home__why.png';
import Footer from "../../general/footer/footer";
const Home = () => {


    return (
        <div className={style.wrapper}>
            <Header/>
            <div className={style.content}>
                <div className={style.title}>What are natural energy sources?</div>
                <section className={style.hero}>
                    <img className={style.hero__img} src={heroImg} alt="Planet"/>
                    <div className={style.hero__text}>Natural Energy Sources Explained: Solar panels, wind turbines, and hydroelectric power stations are renewable energy sources that harness nature's elements to generate electricity. Solar panels convert sunlight into electricity, while wind turbines utilize wind energy and hydroelectric stations use flowing water to produce power. These clean and sustainable sources play a vital role in reducing emissions and moving towards a greener energy future.</div>
                </section>
                <div className={style.title}>Why We Should Use Natural Energy Sources</div>
                <section className={style.why}>
                    <div className={style.why__text}>Using natural energy sources is crucial for a sustainable future. These sources, such as solar, wind, and hydroelectric power, are renewable and abundant. By harnessing these sources, we reduce our reliance on finite fossil fuels, cut down harmful emissions, and move towards a cleaner, greener energy landscape. Embracing natural energy is key to mitigating climate change and preserving our planet for future generations.</div>
                    <img className={style.why__img} src={whyImg} alt=""/>
                </section>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;