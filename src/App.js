import React, {useState} from 'react';
import {Background} from './components/Background/Background';
import {Settings} from "./components/Settings/Settings";
import {Board} from "./components/Board/Board";

export const App = () => {
    const [gameOptions, setGameOptions] = useState(null);

    const startGame = (options) => {
        setGameOptions(options);
    };

    const restartGame = () => {
        setGameOptions(null)
    }

    return (
        <>
            <Background/>
            <h1>Memory Game</h1>
            {!gameOptions ? (
                <Settings startGame={startGame}/>
            ) : (
                <Board gameOptions={gameOptions}
                restartGame={restartGame}
                />
            )}
        </>
    );
}