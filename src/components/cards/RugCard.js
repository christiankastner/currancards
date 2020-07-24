import React, {useState} from "react";
import Style from "./RugCard.module.scss";
import Swatch from "./Swatch";
import Slider from "./Slider";

const maxColors = 5;

export function RugCard({rug}) {
    const [selected, setSelected] = useState(0)
    const renderSwatches = () => {
        if (!rug.hasOwnProperty("colors")) return
        return rug.colors.slice(0,maxColors).map((swatch,index) => {
            return <Swatch 
                active={selected === index} 
                swatch={swatch} key={index} 
                onClick={() => setSelected(index)}/>
    })}

    return (
        <div className={Style.rugCard}>
            <a href={rug.link}>
                <img alt={`${rug.name} ${rug.colors[selected].color}`} src={rug.colors[selected].image}/>
            </a>
            <div className={Style.content}>
                <a href={rug.link}>
                    <h4>{rug.name}</h4>
                    <p>${rug.price} SQ YD</p>
                </a>
            <div className={Style.footer}>
                {renderSwatches()}
                {rug.colors.length > maxColors && <a href={rug.link}>+{rug.colors.length - maxColors}</a>}
            </div>
            </div>
        </div>
    )
}

export function RugCardWithSlide({rug}) {
    const [selected, setSelected] = useState(0)
    const renderSwatches = () => {
        if (!rug.hasOwnProperty("colors")) return
        return rug.colors.map((swatch,index) => {
            return <Swatch 
                active={selected === index} 
                swatch={swatch} key={index} 
                onClick={() => setSelected(index)}/>
    })}

    return (
        <div className={Style.rugCard}>
            <a href={rug.link}>
                <img alt={`${rug.name} ${rug.colors[selected].color}`} src={rug.colors[selected].image}/>
            </a>
            <div className={Style.content}>
                <a href={rug.link}>
                    <h4>{rug.name}</h4>
                    <p>${rug.price} SQ YD</p>
                </a>
            <Slider split={maxColors}>
                {renderSwatches()}
            </Slider>
            </div>
        </div>
    )
}