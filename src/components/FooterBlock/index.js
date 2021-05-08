import React from 'react'
import Paragraph from '../Paragraph';

import style from './FooterBlock.module.scss';

const FooterBlock = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.flexWrap}>
                <Paragraph color='white' pad={0} fz={18}>React</Paragraph>
                <Paragraph color='white' pad={0} fz={18}>Mykola_Kutsil</Paragraph>
            </div>

        </div>
    )
}

export default FooterBlock;
