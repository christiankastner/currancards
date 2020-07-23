import React, {useState} from "react";
import Style from "./RugCard.module.scss";
import {classNames} from "../../services/utils"

export default function RugCard({rug}) {
    const [selected, setSelected] = useState(0)
    const maxColors = 8;
    const renderSwatches = () => {
        if (!rug.hasOwnProperty("colors")) return
        return rug.colors.slice(0,maxColors).map((color,index) => {
            return (
                    <button className={classNames(index === selected ? Style.swatchActive : "",Style.swatch)} title={color.color} style={{background: `url(${color.image})`}} onClick={() => setSelected(index)}>
                    </button>
            )
    })}

    return (
        <div className={Style.rugCard}>
            <a href={rug.link}>
                <img src={rug.colors[selected].image}/>
            </a>
            <div className={Style.content}>
                <a href={rug.link}>
                    <h4>{rug.name}</h4>
                    <p>${rug.price} SQ YD</p>
                </a>
            <div className={Style.footer}>
                {renderSwatches()}
                {rug.colors.length > maxColors && <a href="#">+{rug.colors.length - maxColors}</a>}
            </div>
            </div>
        </div>
    )
}