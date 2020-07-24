import React from "react";
import Style from "./Swatch.module.scss";
import {classNames} from "../../services/utils"

export default function Swatch({swatch, onClick, active}) {
    return (
        <div className={classNames(Style.swatchContainer,active ? Style.activeSwatch : "")} >
            <p className={Style.swatch} title={swatch.color} style={{background: `url(${swatch.image})`}} onClick={onClick}>
            </p>
        </div>
    )
}