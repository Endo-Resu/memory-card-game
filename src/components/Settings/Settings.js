import React, {useState} from "react";
import {RadioBox} from "../RadioBox/RadioBox";
import {Counter} from "../Counter/Counter"
import {CATEGORIES, PACE, INITIAL_CARDS_COUNT} from "../../utils/constants/constants";

import s from './Settings.module.scss'

export const Settings = ({startGame}) => {
    const [category, setCategory] = useState(CATEGORIES[0]);
    const [pace, setPace] = useState(PACE[0]);
    const [cardsCount, setCardsCount] = useState(INITIAL_CARDS_COUNT);

    const onStartGameClick = () => {
        startGame({category, pace, cardsCount})
    };

    return (
        <div className={`${s.settings} frosted`}>
            <h2>Settings</h2>

            <h4>Category:</h4>
            <div className={s.setting}>
                {CATEGORIES.map(item => (
                    <RadioBox
                        key={item}
                        name={item}
                        selectedItem={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                ))}
            </div>

            <h4>Amount of cards:</h4>
            <div className={s.setting}>
                <Counter cardsCount={cardsCount} onClick={setCardsCount}/>
            </div>

            <h4>Difficulty:</h4>
            <div className={s.setting}>
                {PACE.map(item => (
                    <RadioBox
                        key={item}
                        name={item}
                        selectedItem={pace}
                        onChange={(e) => setPace(e.target.value)}
                    />
                ))}
            </div>

            <button className={`${s.button} frosted`} onClick={onStartGameClick}>Start the Game</button>
        </div>
    );
}