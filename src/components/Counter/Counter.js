import React from "react";

import s from './Counter.module.scss';

export const Counter = ({cardsCount, onClick}) => {

    const STEP = 2;

    const onDecrease = (e) => {
        e.preventDefault();
        const cardsNumber = cardsCount - STEP;

        if (cardsNumber >= 4) {
            onClick(cardsNumber);
        }
    }

    const onIncrease = (e) => {
        e.preventDefault();

        const cardsNumber = cardsCount + STEP;

        if (cardsNumber <= 160) {
            onClick(cardsNumber);
        }
    }

    return (
        <>
            <div className={s.quantity}>
                <button className={s.minus} onClick={onDecrease}>
                    -
                </button>
                <span className={s.quantity}>{cardsCount}</span>
                <button className={s.plus} onClick={onIncrease}>
                    +
                </button>
            </div>
        </>
    )
}