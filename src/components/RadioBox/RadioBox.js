import React from "react";

import s from "./RadioBox.module.scss"

export const RadioBox = ({name, selectedItem, onChange}) => {
    const isChecked = name === selectedItem;
    console.log(isChecked);

    return (
        <>
            <div className={s.radioBox}>
                <input
                    type="radio"
                    name={name}
                    id={name}
                    value={name}
                    checked={isChecked}
                    onChange={onChange}
                />
                <label htmlFor={name}>
                    {name}
                </label>
            </div>
        </>
    )
}