import React from 'react'

import style from './FooterBlock.module.scss';

const FooterBlock = () => {
    return (
        <div className={style.wrapper}>

            <div className={style.flexWrap}>
                <span>React</span>
                {/* <span></span> */}
                <span>Mykola_Kutsil</span>
            </div>

        </div>
    )
}

export default FooterBlock;
