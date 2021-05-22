import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./Input.module.css";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    error?: string
    spanClassName?: string
    supperInputClassName?: string
}

export const Input: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress,
        error,
        className, spanClassName,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`

    return (
        <>
            <input
                type={"text"}
                onChange={onChangeCallback}
                {...restProps}
            />
            {error && <div className={finalSpanClassName}>{error}</div>}
        </>
    );
}
