import React from 'react';

import s from './Background.module.scss';

const cubes = [...Array(10)];

export const Background = () => (
    <div className={s.area}>
        <ul className={s.cubes}>
            {cubes.map((cube, i) => (
                <li key={i}></li>
            ))}
        </ul>
    </div>
);
