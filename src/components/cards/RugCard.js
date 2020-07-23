import React from "react";
import Style from "./RugCard.module.scss";

export default function RugCard({rug}) {
    return (
        <div>
            <img src={rug.image}/>
            <div className={Style.content}>
                <h4>{rug.name}</h4>
                <p>${rug.price}</p>
            </div>
        </div>
    )
}