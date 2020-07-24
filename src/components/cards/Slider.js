import React from "react";
import Style from "./Slider.module.scss";

export default function Slider({children, split}) {
    console.log(children)
    return (
        <div className={Style.main}>
            {children}
        </div>
    )
}