import React, {useState, useCallback} from "react";
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
            {page > 0 && <button onClick={() => increment(-split)}>Prev</button>}
            {renderElements()}
            {page + split < children.length && <button onClick={() => increment(split)}>Next</button>}
        </div>
    )
}