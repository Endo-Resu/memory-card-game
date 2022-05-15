import React from 'react';
import {Image} from "../Image/Image";

import s from './Card.module.scss';

export const Card = ({card, onCardClick}) => {

    const onClick = () => {
        if (card.isShown || card.isFound)
            return;

        onCardClick(card.uniqueId);
    };

    return <>
        <div className={s.container} onClick={onClick}>
            <div className={`${s.card} ${card.isShown ? s.flipped : ''}`}>
                <div className={`${s.front} ${card.isFound ? s.found : ''}`}></div>
                <div className={s.back}>
                    <Image url={card.url}/>
                </div>
            </div>
        </div>
    </>;
};