import React, {useState, useCallback} from "react";
import {ReactComponent as Arrow} from "../svg/triangle.svg";
import Style from "./Slider.module.scss";

export default function Slider({children, split}) {
    const [page, setPage] = useState(0);

    // This works for decrementing too if a neg number is
    // inputted. 
    const increment = useCallback((amount) => {
        setPage(page => page += amount)
    })

    // Renders the right cards based on paginated state
    const renderElements = () => {
        return children.slice(page, page + split)
    }


    return (
        <div className={Style.main}>
            {page > 0 && <button className={Style.backward} onClick={() => increment(-split)}><Arrow/></button>}
            <div className={Style.footer}>   
                {renderElements()}
            </div>
            {page + split < children.length && <button className={Style.forward} onClick={() => increment(split)}><Arrow/></button>}
        </div>
    )
}