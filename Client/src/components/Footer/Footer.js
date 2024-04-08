import { Link } from 'react-router-dom';
import style from './style.module.css'

function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.paragrafs}>
                <div className={style.home}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div className={style.nameStudents}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>
            <div className={style.stroke}></div>
            <div className={style.yootube}>
                <div className={style.img}>
                    <div className={style.img1}></div>
                    <div className={style.img2}></div>
                    <div className={style.img3}></div>
                </div>
                <div className={style.project}>
                    <p>©2021 Hschool. Project for</p>
                    <Link to={'/'}><p className={style.hschool}>Hschool.</p></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;