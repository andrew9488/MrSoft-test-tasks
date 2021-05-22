import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {fetchStringsTC} from "./bll/strings-reducer";
import {RootStateType} from "./bll/store";
import {lengthFilter} from "./utils/filters/length-filter";

function App() {

    const [value, setValue] = useState<string | number>('')
    const [register, setRegister] = useState<boolean>(false)
    const [filteredArray, setFilteredArray] = useState<string[]>([])
    // const strings = useSelector<RootStateType, string[]>(state => state.strings.data)
    const strings = ["affenpinscher", "whippet", "african", "irish wolfhound", "pembroke", "airedale", "NEWFOUNDLAND", "OTTERHOUND",
        "PAPILLON", "PEKINESE", "SWISS MOUNTAIN", "weimaraner", "MINIATURE PINSCHER", "akita", "GERMAN POINTER", "vizsla",
        "POMERANIAN", "appenzeller", "MINIATURE POODLE", "yorkshire terrier", "STANDARD POODLE", "basenji", "BERNESE MOUNTAIN",
        "wheaten terrier", "TOY POODLE", "beagle", "MEXICANHAIRLESS",]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStringsTC())
    }, [dispatch])

    let array: string[] = []

    const onSubstringClickHandler = () => {
        if (value) {
            if (register) {
                if (typeof value === "string") {
                    for (let i = 0; i < strings.length; i++) {
                        if (strings[i].includes(value)) {
                            array.push(strings[i])
                        }
                    }
                    setFilteredArray(array)
                }
            } else {
                if (typeof value === "string") {
                    for (let i = 0; i < strings.length; i++) {
                        if (strings[i].toLocaleLowerCase().includes(value.toLocaleLowerCase())) {
                            array.push(strings[i])
                        }
                    }
                    setFilteredArray(array)
                }
            }
        }
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
            <div><input value={value} onChange={onChangeHandler}/></div>
            <input type="checkbox" checked={register} onChange={onChangeCheckHandler}/>
            <div>
                <button onClick={(e) => onLengthFilterClickHandler()}>по количеству</button>
                <button onClick={(e) => onSubstringClickHandler()}>по подстроке</button>
            </div>
            <>{filteredArray && filteredArray.map((s, i) => {
                return <div key={i}>{s}</div>
            })}</>
        </div>
    );
}

export default App;
