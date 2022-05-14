import {useEffect, useState} from "react";
import {BASE_URL} from "../constants/constants";

const getRandomPage = () => Math.round(Math.random() * (60 - 1) +1);

export const useGetImages = (gameOptions) => {
    const [images, setImages] = useState([]);

    const buildUrl = () => {
        let url = new URL(BASE_URL);

        url.search = new URLSearchParams({
            query: gameOptions.category,
            orientation: 'square',
            size: 'small',
            per_page: gameOptions.cardsCount / 2,
            page: getRandomPage(),
        });

        return url;
    };

    const fetchPics = () => {
        fetch(buildUrl(), {
            headers: {
                Authorization: process.env.REACT_APP_AUTH_KEY,
            },
        })
            .then(data => data.json())
            .then(data => setImages(data.photos))
    };

    useEffect(() => {
        if (!gameOptions) return;
        fetchPics();
    }, [gameOptions]);

    // useEffect(() => {
    //     const fetchPics = () => {
    //         fetch(buildUrl(), {
    //             headers: {
    //                 Authorization: process.env.REACT_APP_AUTH_KEY,
    //             }
    //         })
    //             .then(data => data.json())
    //             .then(data => setImages(data.photos));
    //     };
    //
    //     fetchPics();
    // },[gameOptions]);

    return images;
};