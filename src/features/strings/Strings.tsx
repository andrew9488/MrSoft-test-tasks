import React from "react";
import s from "./Strings.module.scss"

type StringsPropsType = {
    strings: string []
}

export const Strings: React.FC<StringsPropsType> = ({strings}) => {
    return (
        <div className={s.stringsContainer}>
            {strings.map((s, i) => {
                return <div key={i}>{s}</div>
            })}
        </div>
    );
}