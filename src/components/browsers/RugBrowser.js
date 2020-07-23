import React, {useState, useEffect} from "react";
import Style from "./RugBrowser.module.scss";
import RugCard from "../cards/RugCard"
import {api} from "../../services/api"

export default function RugBrowser() {
    const [rugs, setRugs] = useState(null)

    useEffect(() => {
        api.getRugs()
            .then(resp => setRugs(resp.data))
    })

    const renderRugs = () => {
        return rugs.map((rug,index) =>{
            return (
                <RugCard key={index} rug={rug} />
            )
        })
    }

    return (
        <div>
            <ul className={Style.rugContainer}>
                {rugs && renderRugs()}
            </ul>
        </div>
    )
}