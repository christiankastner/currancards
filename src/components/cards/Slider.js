import React, {useState, useCallback} from "react";
import {ReactComponent as Arrow} from "../svg/triangle.svg";
import Style from "./Slider.module.scss";

export default function Slider({children, split}) {
    const [page, setPage] = useState(0);
    const increment = useCallback((amount) => {
        setPage(page => page += amount)
    })
    const renderElements = () => {
        return children.slice(page, page + split)
    }

    return (
        <div className={Style.main}>
            {page > 0 && <button className={Style.backward} onClick={() => increment(-split)}><Arrow/></button>}
            {renderElements()}
            {page + split < children.length && <button className={Style.forward} onClick={() => increment(split)}><Arrow/></button>}
        </div>
    )
}