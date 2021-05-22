import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchStringsTC} from "../bll/strings-reducer";
import {RootStateType} from "../bll/store";
import {lengthFilter} from "../utils/filters/length-filter";
import {substringFilter} from "../utils/filters/substring-filter";
import {Checkbox} from "../features/common/Checkbox/Checkbox";
import {Input} from "../features/common/Input/Input";

export const App: React.FC = () => {

    const [value, setValue] = useState<string | number>('')
    const [register, setRegister] = useState<boolean>(false)
    const [filteredArray, setFilteredArray] = useState<string[]>([])
    // const strings = useSelector<RootStateType, string[]>(state => state.strings.data)
    const strings = ["affenpinscher", "whippet", "african", "irish wolfhound", "pembroke", "airedale", "NEWFOUNDLAND", "OTTERHOUND",
        "PAPILLON", "PEKINESE", "SWISS MOUNTAIN", "weimaraner", "MINIATURE PINSCHER", "akita", "GERMAN POINTER", "vizsla",
        "POMERANIAN", "appenzeller", "MINIATURE POODLE", "yorkshire terrier", "STANDARD POODLE", "basenji", "BERNESE MOUNTAIN",
        "wheaten terrier", "TOY POODLE", "beagle", "MEXICANHAIRLESS",]
    const dispatch = useDispatch()

    const error = value ? "" : "error";

    useEffect(() => {
        dispatch(fetchStringsTC())
    }, [dispatch])

    const onSubstringClickHandler = () => {
        let array = substringFilter(value, register, strings)
        setFilteredArray(array)
    }
    const onLengthFilterClickHandler = () => {
        let array = lengthFilter(value, strings)
        setFilteredArray(array)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const onChangeCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setRegister(e.currentTarget.checked)
    }

    return (
        <div className="App">
            <div>
                <Input value={value}
                        onChange={onChangeHandler}
                        error={error}/>
            </div>
            <Checkbox checked={register} onChange={onChangeCheckHandler}/>
            <div>
                <button onClick={(e) => onLengthFilterClickHandler()}>по количеству</button>
                <button onClick={(e) => onSubstringClickHandler()}>по подстроке</button>
            </div>
            <div>

            </div>
            <>{filteredArray && filteredArray.map((s, i) => {
                return <div key={i}>{s}</div>
            })}</>
        </div>
    );
}

