import style from './footer.module.css'
import nameImg from '../../../imgs/footer__school.png'
import addressImg from '../../../imgs/footer__address.png'
import cityImg from '../../../imgs/footer__city.png'
import gmailImg from '../../../imgs/footer__gmail.png'
import githubImg from '../../../imgs/footer__github.png'
import phoneImg from '../../../imgs/footer__phone.png'
const Footer = () => {
    return (
    <footer className={style.wrapper}>
            <ul className={style.company}>
                <li className={style.company__name}><img src={nameImg} alt="company icon"/><span>The best college</span></li>
                <li className={style.company__address}><img src={addressImg} alt="address icon"/><span>Example Street 1</span> </li>
                <li className={style.company__city}><img src={cityImg} alt="city icon"/><span>00000 City</span></li>
            </ul>
            <ul className={style.contacts}>
                <li className={style.contacts__gmail}><img src={gmailImg} alt="gmail icon"/><span>guziiuchyk@gmail.com</span> </li>
                <li className={style.contacts__github}><img src={githubImg} alt="github icon"/><a href="https://github.com/guziiuchyk">github.com/guziiuchyk</a></li>
                <li className={style.contacts__phoneNumber}><img src={phoneImg} alt=""/><span>+000 00 0000000</span></li>
            </ul>
            <a href='https://t.me/guziiuchyk' className={style.button}>Contact</a>
    </footer>
    )
}

export default Footer;