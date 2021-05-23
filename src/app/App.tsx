import React, {useEffect} from "react";
import s from "./App.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchStringsTC, StatusType} from "../bll/strings-reducer";
import {FilterSettings} from "../features/filterSettings/FilterSettings";
import {RootStateType} from "../bll/store";
import {Header} from "../features/header/Header";
import {Footer} from "../features/footer/Footer";
import {Preloader} from "../features/common/components/preloader/Preloader";

export const App: React.FC = () => {

    const strings = useSelector<RootStateType, string[]>(state => state.strings.data)
    const status = useSelector<RootStateType, StatusType>(state => state.strings.status)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStringsTC())
    }, [dispatch])

    if (status === "loading") {
        return <Preloader/>
    }

    return (
        <div className={s.App}>
            <Header/>
            <FilterSettings strings={strings}/>
            <Footer/>
        </div>
    );
}

