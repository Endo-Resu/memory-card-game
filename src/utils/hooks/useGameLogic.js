import {useEffect, useState} from "react";
import {addUniqueIds, getFormedData, getPairedPics, shuffleCards} from "../index";
import {PACES} from "../constants/constants";

const MAX_VISIBLE_CARDS = 2;

export const useGameLogic = (images, gamePace) => {
    const [score, setScore] = useState(0);
    const [isWin, setIsWin] = useState(false);
    const [cards, setCards] = useState([]);
    const [visibleCards, setVisibleCards] = useState([]);

    const prepareCards = () => {
        const a = getFormedData(images);
        const b = getPairedPics(a);
        const c = addUniqueIds(b);
        const d = shuffleCards(c);
        setCards(d);
    };

    const flipCard = clickedCardId => {
        const flippedCards = cards.map(card => {
            if (card.uniqueId === clickedCardId) {
                card.isShown = true;
            }

            if (card.isShown) setVisibleCards(prevState => [...prevState, card.uniqueId]);

            return card;
        });

        setCards(flippedCards);
    };

    const onCardClick = clickedCardId => {
        if (visibleCards.length < MAX_VISIBLE_CARDS) {
            flipCard(clickedCardId);
        }
    };

    const updateScore = () => {
        setScore(prevScore => prevScore + 1);
    };

    const checkMatch = () => {
        const visible = cards.filter(card => visibleCards.indexOf(card.uniqueId) !== -1);

        const matched = visible[0].id === visible[1].id;

        const updatedCards = cards.map(card => {
            if (visibleCards.indexOf(card.uniqueId) !== -1) {
                card.isShown = false;
                card.isFound = matched;
            }

            return card;
        });

        setTimeout(() => {
            setCards(updatedCards);
            setVisibleCards([]);
            if (matched) updateScore();
        }, PACES[gamePace]);
    };

    useEffect(() => {
        if (images.length > 0) prepareCards();
    }, [images]);

    useEffect(() => {
        if (visibleCards.length >= MAX_VISIBLE_CARDS) {
            checkMatch();
        }
    }, [visibleCards]);

    useEffect(() => {
        if (images.length && score === images.length) {
            setIsWin(true);
        }
    }, [score]);

    return { cards, onCardClick, isWin };
};
