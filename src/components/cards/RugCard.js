import React, {useState} from "react";
import Style from "./RugCard.module.scss";

export default function RugCard({rug}) {
    const [selected, setSelected] = useState(0)
    const maxColors = 8;
    const renderSwatches = () => {
        if (!rug.hasOwnProperty("colors")) return
        return rug.colors.slice(0,maxColors).map((color,index) => {
            return (
                <button title={color.color} onClick={() => setSelected(index)} className={Style.swatch} style={{background: `url(${color.image})`}}>
                </button>
            )
    })}

    return (
        <div className={Style.rugCard}>
            <a href="#">
                <img src={rug.colors[selected].image}/>
            </a>
            <div className={Style.content}>
                <a href="#">
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