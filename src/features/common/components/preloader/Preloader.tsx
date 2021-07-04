import React from "react";
import preloader from "../../../../assets/images/Rolling-1s-231px.svg"

export const Preloader: React.FC = () => {
    return (
        <div style={{margin: "0 auto", width: "200px"}}>
            <img src={preloader} alt="loading" style={{width: "100px", height: "100px"}}/>
        </div>
    )
}