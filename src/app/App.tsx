import React, {useEffect} from "react";
import s from "./App.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchStringsTC} from "../bll/strings-reducer";
import {FilterSettings} from "../features/filterSettings/FilterSettings";
import {RootStateType} from "../bll/store";
import {Header} from "../features/header/Header";
import {Footer} from "../features/footer/Footer";

export const App: React.FC = () => {

    // const strings = useSelector<RootStateType, string[]>(state => state.strings.data)
    const strings = [
        "affenpinscher",
        "whippet",
        "african",
        "irish wolfhound",
        "pembroke",
        "airedale",
        "NEWFOUNDLAND",
        "OTTERHOUND",
        "PAPILLON",
        "PEKINESE",
        "SWISS MOUNTAIN",
        "weimaraner",
        "MINIATURE PINSCHER",
        "akita",
        "GERMAN POINTER",
        "vizsla",
        "POMERANIAN",
        "appenzeller",
        "MINIATURE POODLE",
        "yorkshire terrier",
        "STANDARD POODLE",
        "basenji",
        "BERNESE MOUNTAIN",
        "wheaten terrier",
        "TOY POODLE",
        "beagle",
        "MEXICANHAIRLESS",
        "westhighland terrier",
        "PUG",
        "bluetick",
        "TIBETAN MASTIFF",
        "toy terrier",
        "PYRENEES",
        "borzoi",
        "BULL MASTIFF",
        "tibetan terrier",
        "REDBONE",
        "bouvier",
        "MALTESE",
        "silky terrier",
        "CHESAPEAKE RETRIEVER",
        "boxer",
        "MALINOIS",
        "sealyham terrier",
        "CURLY RETRIEVER",
        "brabancon",
        "MALAMUTE",
        "scottish terrier",
        "FLATCOATED RETRIEVER",
        "briard",
        "LHASA",
        "patterdale terrier",
        "GOLDEN RETRIEVER",
        "boston bulldog",
        "LEONBERG",
        "norwich terrier",
        "RHODESIAN RIDGEBACK",
        "french bulldog",
        "LABRADOR",
        "norfolk terrier",
        "ROTTWEILER",
        "staffordshire bullterrier",
        "KUVASZ",
        "lakeland terrier",
        "SALUKI",
        "cairn",
        "KOMONDOR",
        "kerryblue terrier",
        "SAMOYED",
        "chihuahua",
        "KELPIE",
        "irish terrier",
        "SCHIPPERKE",
        "chow",
        "KEESHOND",
        "fox terrier",
        "GIANT SCHNAUZER",
        "clumber",
        "HUSKY",
        "dandie terrier",
        "MINIATURE SCHNAUZER",
        "border collie",
        "WALKER HOUND",
        "border terrier",
        "ENGLISH SETTER",
        "coonhound",
        "ENGLISH HOUND",
        "bedlington terrier",
        "GORDON SETTER",
        "cardigan corgi",
        "BLOOD HOUND",
        "australian terrier",
        "IRISH SETTER",
        "dachshund",
        "BASSET HOUND",
        "american terrier",
        "ENGLISH SHEEPDOG",
        "great dane",
        "AFGHAN HOUND",
        "stbernard",
        "SHETLAND SHEEPDOG",
        "scottish deerhound",]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchStringsTC())
    }, [dispatch])

    return (
        <div className={s.App}>
            <Header/>
            <FilterSettings strings={strings}/>
            <Footer/>
        </div>
    );
}

