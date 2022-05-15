import React from 'react';

import s from './Result.module.scss';

export const Result = ({ restartGame }) => {
    return (
        <div className={`${s.container} frosted`}>
            <p>Awesome!</p>
            <button className={`${s.button} frosted`}
                    onClick={restartGame}
            >
                Finish Game
            </button>
        </div>
    );
}