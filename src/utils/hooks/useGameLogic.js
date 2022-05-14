import {useEffect, useState} from "react";
import {addUniqueIds, getFormedData, getPairedPics, shuffleCards} from "../index";
import {PACES} from "../constants/constants";

export const useGameLogic = (images, gamePace) => {
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);

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

            if (card.isShown) {
                setVisibleCards(prevState => [...prevState, card.uniqueId])
            }

            return card
        });

        setCards(flippedCards);
    };

    const onCardClick = clickedCardId => {
        if (visibleCards < 2) {
            flipCard(clickedCardId);
        }
    };

    useEffect(() => {
        if (images.length > 0) {
            prepareCards()
        }
    }, [images]);

    useEffect(() => {
        if (visibleCards.length > 2) {
            const updatedCards = cards.map(card => {
                if (visibleCards.indexOf(card.uniqueId) !== -1) {
                    card.isShown = false;
                }

                return card
            });

            setTimeout(() => {
                setCards(updatedCards);
                setVisibleCards([])
            }, PACES[gamePace])
        }
    }, [visibleCards]);

    return {cards, onCardClick};
};
