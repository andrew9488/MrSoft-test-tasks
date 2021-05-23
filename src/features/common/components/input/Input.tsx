import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "./Input.module.scss";

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperInputTextPropsType = DefaultInputPropsType & {
    onChangeText?: (value: string) => void
    error?: boolean | null
    spanClassName?: string
    supperInputClassName?: string
    helperText?: string
}

export const Input: React.FC<SuperInputTextPropsType> = (
    {
        type,
        onChange, onChangeText,
        onKeyPress,
        error,
        className, spanClassName,
        helperText,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeText && onChangeText(e.currentTarget.value)
    }

    const finalSpanClassName = `${s.error} ${spanClassName ? spanClassName : ""}`
    const finalInputClassName = `${error ? s.inputError : s.inputCorrect}`

    return (
        <>
            <input
                type={"text"}
                onChange={onChangeCallback}
                {...restProps}
                className={finalInputClassName}
            />
            {error && <div className={finalSpanClassName}>{helperText}</div>}
        </>
    );
}
