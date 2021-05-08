import React from 'react';
import H1 from '../H1';
import Paragraph from '../Paragraph';

import style from './HeaderBlock.module.scss';
// import { ReactComponent as ReactLogoSvg } from './../../logo.svg';


const HeaderBlock = ({ title, hideBackground = false, descr }) => {
    const styleCover = hideBackground ? { backgroundImage: 'none' } : {};
    return (
        <div className={style.cover} style={styleCover}>
            <div className={style.wrap}>
                {title && <H1 fz={68} pad={24} color='white'>{title}</H1>}
                {/* <ReactLogoSvg /> */}
                {descr && <Paragraph fz={20} color="white" pad='15px 0 30px 0' lh={1.55}>{descr}</Paragraph>}
            </div>
        </div>
    );
}

export default HeaderBlock;