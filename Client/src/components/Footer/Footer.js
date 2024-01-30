import React from 'react';
import style from './style.module.css'


function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.infoFooter}>
                <div className={style.navigation}>
                    <p>Home</p>
                    <p>Textbook</p>
                    <p>Statistics</p>
                    <p>Sprint</p>
                </div>
                <div className={style.names}>
                    <p>Alex</p>
                    <p>Gabriel</p>
                    <p>Marcus</p>
                </div>
            </div>
            <div className={style.line}></div>

            <div className={style.allLitleImg}>
                <div className={style.img}>
                    <div className={style.catImg}></div>
                    <div className={style.GTimg}></div>
                    <div className={style.youtubeImg}></div>
                </div>
            </div>
            <div className={style.projectFooter}>
                <p>©2021 Hschool. Project for </p>
               <p className={style.hschool}>Hschool.</p>
               </div>
            </div>
    )
}

export default Footer;