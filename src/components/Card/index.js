import React, { Component } from 'react';
import style from './Card.module.scss';

import cl from 'classnames';

export default class Card extends Component {

    state = {
        activeCard: false
    }

    onCardClick = () => {
        this.setState({
            activeCard: !this.state.activeCard,
        })
    }

    render() {
        const { eng, uk } = this.props;
        const { activeCard } = this.state;

        const cardClass = [style.card];
        if (activeCard) {
            cardClass.push(style.active);
        }
        return (
            <div
                className={cl(style.card, { [style.active]: activeCard })}
                onClick={this.onCardClick}
            >
                <div className={style.cardInner}>
                    <div className={style.cardFront}>
                        {eng}
                    </div>
                    <div className={style.cardBack}>
                        {uk}
                    </div>
                </div>
            </div>
        );
    }
}
