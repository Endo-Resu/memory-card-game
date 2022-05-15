import React, {useEffect, useState} from "react";
import {useGetImages} from "../../utils/hooks/useGetImages";
import {LoaderContainer} from "../Loader/Loader";
import {useGameLogic} from "../../utils/hooks/useGameLogic";
import {Card} from "../Card/Card";
import {Result} from "../Result/Result";

import s from './Board.module.scss';

export const Board = ({gameOptions, restartGame}) => {
    const [isLoading, setIsLoading] = useState(true);
    const images = useGetImages(gameOptions);
    const {cards, onCardClick, isWin} = useGameLogic(images, gameOptions.pace);

    useEffect(() => {
        if (images.length > 0) setIsLoading(false)
    }, [images])

    return (
        <>
            {isWin && <Result restartGame={restartGame}/>}
            {isLoading ?
                <LoaderContainer/>
                :
                <div className={s.board}>
                    {cards.map(card =>
                        <Card
                            key={card.uniqueId}
                            card={card}
                            onCardClick={onCardClick}
                        />
                    )}
                </div>
            }
        </>
    )
}