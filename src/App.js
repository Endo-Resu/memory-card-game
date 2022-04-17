import React from 'react';
import {Background} from './components/Background/Background';
import {useGetImages} from "./utils/hooks/useGetImages";

export const App = () => {
    const images = useGetImages();

    console.log({images})

    return (
        <>
            <Background/>
            <h1>Memory Game</h1>
        </>
    );
}