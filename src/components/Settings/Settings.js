import React, {useState} from "react";
import {RadioBox} from "../RadioBox/RadioBox";
import {CATEGORIES} from "../../utils/constants/constants";

import s from './Settings.module.scss'

export const Settings = () => {
    const [category, setCategory] = useState(CATEGORIES[0]);

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
            </div>
    );
}