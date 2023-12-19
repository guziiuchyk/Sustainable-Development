import Header from "../header/header";
import style from './errorElement.module.css'
const errorElement = () => {
    return (
        <>
            <Header/>
            <div className={style.error}>404 Page not found</div>
        </>
    )
}

export default errorElement;