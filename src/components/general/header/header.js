import style from './header.module.css'
import {NavLink} from "react-router-dom";
import logo from '../../../imgs/logo.png'
import {useState} from "react";
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    function handleBurgerClick(){
        setIsOpen(!isOpen)
    }
    function handleListClick(){
        console.log('click')
        setIsOpen(false)
    }

    return (
        <>
            <header className={style.wrapper}>
            <div className={style.content}>
                <div className={style.logo}>
                    <span className={style.logo__text}>Guziiuchyk</span>
                    <img className={style.logo__img} src={logo} alt=""/>
                </div>
                <div onClick={handleBurgerClick} className={`${style.burger} ${isOpen ? style.burgerOpen : ''}`}>
                    <div className={style.burger__line}></div>
                    <div className={style.burger__line}></div>
                    <div className={style.burger__line}></div>
                </div>
                <div onClick={handleListClick} className={`${style.list} ${isOpen ? style.burgerOpen : ''}`}>
                    <NavLink to='/' className={`${style.link} ${isActive('/') ? `${style.active}` : ''}`}>Home</NavLink>
                    <NavLink to='/solar-energy' className={`${style.link} ${isActive('/solar-energy') ? `${style.active}` : ''}`}>Solar energy</NavLink>
                    <NavLink to='/wind-energy' className={`${style.link} ${isActive('/wind-energy') ? `${style.active}` : ''}`}>Wind energy</NavLink>
                    <NavLink to='/statistics' className={`${style.link} ${isActive('/statistics') ? `${style.active}` : ''}`}>Statistics</NavLink>
                </div>
            </div>

            </header>
        </>
    )
}
function isActive(path) {
    return window.location.pathname === path ? 'active' : '';
}
export default Header;