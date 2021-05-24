import React from "react";
import preloader from "../../../../assets/images/Rolling-1s-231px.svg"

export const Preloader: React.FC = () => {
    return (
        <>
            <h2>loading...</h2>
            <img src={preloader} alt="loading" style={{width: "100px", height: "100px", margin: "0 auto"}}/>
        </>
    )
}