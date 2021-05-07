import React from 'react';

import style from './HeaderBlock.module.scss';
// import { ReactComponent as ReactLogoSvg } from './../../logo.svg';


const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    const styleCover = hideBackground ? { backgroundImage: 'none' } : {};
    return (
        <div className={style.cover} style={styleCover}>
            <div className={style.wrap}>
                {title && <h1 className={style.header}>{title}</h1>}
                {/* <ReactLogoSvg /> */}
                {descr && <p className={style.descr}>{descr}</p>}
            </div>
        </div>
    );
}

export default HeaderBlock;