import {useEffect} from "react";
import {BASE_URL} from "../constants/constants";

const getRandomPage = () => Math.round(Math.random() * (60 - 1) +1);

export const useGetImages = () => {
    const buildUrl = () => {
        let url = new URL(BASE_URL);

        url.search = new URLSearchParams({
            query: 'nature',
            orientation: 'square',
            size: 'small',
            pre_page: 2,
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
            .then(data => console.log(data));
    };

    useEffect(() => {
        fetchPics();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
};