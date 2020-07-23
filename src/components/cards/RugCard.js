import React from "react";
import Style from "./RugCard.module.scss";

export default function RugCard({rug, key}) {

    const renderSwatches = () => {
        if (!rug.hasOwnProperty("colors")) return
        return rug.colors.map(color => {
            console.log(color)
            return (
                <div className={Style.swatch} style={{background: color}}>
                </div>
            )
    })}

    return (
        <div key={key} className={Style.rugCard}>
            <img src={rug.image}/>
            <div className={Style.content}>
                <h4>{rug.name}</h4>
                <p>${rug.price} SQ YD</p>
            <div className={Style.footer}>
                {renderSwatches()}
            </div>
            </div>
        </div>
    )
}