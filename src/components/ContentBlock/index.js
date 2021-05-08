import React from 'react'

import style from './ContentBlock.module.scss';

import Card from '../Card';


const ContentBlock = ({ children, wordsList, bgColor }) => {

    const styles = {
        background: `${bgColor}`
    };

    return (
        <div className={style.wrapper} style={styles}>
            <div className={style.textWrap}>
                {children}
            </div>
            {wordsList ?
                (
                    <div className={style.cardWrap}>
                        {wordsList.map((item, index) => {
                            return (
                                <Card key={index} eng={item.eng} uk={item.uk} />
                            )
                        })}
                    </div>
                )
                :
                null
            }
        </div>
    )
}

export default ContentBlock;
