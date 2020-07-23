import React, {useState, useEffect} from "react";
import Style from "./RugBrowser.module.scss";
import RugCard from "../cards/RugCard"
import {api} from "../../services/api"

export default function RugBrowser() {

    useEffect(() => {
        api.getRugs()
            .then(console.log)
    })
    return (
        <div>

        </div>
    )
}