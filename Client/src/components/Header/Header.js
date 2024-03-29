import React from 'react';
import style from './style.module.css';

function Header() {
    return (
        <div className={style.wrapper}>
            <h1>Hschool</h1>
            <div className={style.btns}>
                <div className={style.login}>Login →</div>
                <div className={style.reg}>Sign Up</div>
            </div>
        </div>
    );
}

export default Header;