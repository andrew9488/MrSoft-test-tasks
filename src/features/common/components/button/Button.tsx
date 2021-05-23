import React, {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import s from "./Button.module.scss";

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type ButtonPropsType = DefaultButtonPropsType & {}

export const Button: React.FC<ButtonPropsType> = (
    {
        ...restProps
    }
) => {


    return (
        <button
            className={s.button}
            {...restProps}
        />
    );
}
