import {useEffect, useState} from "react";
import {addUniqueIds, getFormedData, getPairedPics, shuffleCards} from "../index";

export const useGameLogic = (images) => {

    const [cards, setCards] = useState([]);

    const prepareCards = () => {
        const formedData = getFormedData(images);

        const paredPics = getPairedPics(formedData);

        const getUniqueIds = addUniqueIds(paredPics);

        const makeShuffleCards = shuffleCards(getUniqueIds);

        setCards(makeShuffleCards);
    };

    const flipCard = (clickedCardId) => {
        const flippedCards = cards.map(card => {
            if (card.uniqueId === clickedCardId) {
                card.isShown = true;
            }

            return card
        });

        setCards(flippedCards);
    };

    const onCardClick = clickedCardId => {
        flipCard(clickedCardId);
    };

    useEffect(() => {
        if (images.length > 0) {
            prepareCards()
        }
    }, [images]);

    return {cards, onCardClick};
};
