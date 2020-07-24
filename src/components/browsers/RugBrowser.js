import React, {useState, useEffect} from "react";
import Style from "./RugBrowser.module.scss";
import {RugCard, RugCardWithSlide} from "../cards/RugCard"
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
                <li key={index}>
                    <RugCard rug={rug} />
                </li>
            )
        })
    }

    const renderRugsWithSlide = () => {
        return rugs.map((rug,index) =>{
            return (
                <li key={index}>
                    <RugCardWithSlide rug={rug} />
                </li>
            )
        })
    }

    return (
        <main>
            <div className={Style.main}>
                <ul className={Style.rugContainer}>
                    {rugs && renderRugs()}
                </ul>
            </div>
            <div className={Style.main}>
                <ul className={Style.rugContainer}>
                    {rugs && renderRugsWithSlide()}
                </ul>
            </div>
        </main>
    )
}