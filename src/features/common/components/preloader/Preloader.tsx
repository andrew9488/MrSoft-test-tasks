import React from "react";
import preloader from "../../../../assets/images/Rolling-1s-231px.svg"

export const Preloader: React.FC = ()=>{
    return(
        <>
            <img src={preloader} alt="loading"/>
        </>
    )
}