import React from "react";
import Style from "./Swatch.module.scss";
import {classNames} from "../../services/utils"

// I originally had these just in the card component but 
// it might be useful to have them as reusable components.
// Different retailers will sometimes use these small 
// swatches on product pages too.
export default function Swatch({swatch, onClick, active}) {
    return (
        <div className={classNames(Style.swatchContainer,active ? Style.activeSwatch : "")} >
            <p className={Style.swatch} title={swatch.color} style={{background: `url(${swatch.image})`}} onClick={onClick}>
            </p>
        </div>
    )
}