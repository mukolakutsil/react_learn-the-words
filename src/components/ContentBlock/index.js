import React from 'react'

import style from './ContentBlock.module.scss';

const ContentBlock = ({ contentText, contentTitle }) => {
    return (
        <div className={style.wrapper}>
            {contentTitle && <h1 className={style.title}>{contentTitle}</h1>}
            <div className={style.textWrap}>
                {contentText && <p className={style.text}>{contentText}</p>}
            </div>
        </div>
    )
}

export default ContentBlock;
