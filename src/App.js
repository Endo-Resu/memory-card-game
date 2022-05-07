import React from 'react';
import {Background} from './components/Background/Background';
import {useGetImages} from "./utils/hooks/useGetImages";
import {Settings} from "./components/Settings/Settings";

export const App = () => {
    const images = useGetImages();

    const startGame = (options) => {
        console.log(options)
    };

    return (
        <>
            <Background/>
            <h1>Memory Game</h1>
            <Settings startGame={startGame}/>
        </>
    );
}