import React, {ChangeEvent, useState} from "react";
import {substringFilter} from "../../utils/filters/substring-filter";
import {lengthFilter} from "../../utils/filters/length-filter";
import {Input} from "../common/components/input/Input";
import {Checkbox} from "../common/components/checkbox/Checkbox";
import {Button} from "../common/components/button/Button";
import {Strings} from "../strings/Strings";
import s from "./FilterSettings.module.scss";

type FilterPropsType = {
    strings: string[]
}
export const FilterSettings: React.FC<FilterPropsType> = ({strings}) => {

    const [value, setValue] = useState<string | number>("")
    const [register, setRegister] = useState<boolean>(false)
    const [filteredArray, setFilteredArray] = useState<string[]>([])
    const [error, setError] = useState<boolean | null>(null)

    const onSubstringClickHandler = () => {
        if (value === "") {
            setError(true)
        }
        let array = substringFilter(value, register, strings)
        setFilteredArray(array)
        setValue("")
    }
    const onLengthFilterClickHandler = () => {
        if (value === "") {
            setError(true)
        }
        let array = lengthFilter(value, strings)
        setFilteredArray(array)
        setValue("")
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setValue(e.currentTarget.value)
    }

    const onCheckedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRegister(e.currentTarget.checked)
    }

    return (
        <div className={s.filterContainer}>
            <div className={s.input}>
                <Input value={value}
                       onChange={onChangeHandler}
                       error={error}
                       placeholder="filter for length or substring..."
                       helperText="Filter is required!"
                       onBlur={() => setError(null)}
                />
            </div>
            <div className={s.checkbox}>
                <label>
                    <span>Register:</span> <Checkbox checked={register} onChange={onCheckedHandler}/>
                </label>
            </div>
            <div className={s.buttons}>
                <Button onClick={onLengthFilterClickHandler}>length</Button>
                <Button onClick={onSubstringClickHandler}>substring</Button>
            </div>
            <h2>Filtered strings:</h2>
            <Strings strings={filteredArray}/>
        </div>
    );
}