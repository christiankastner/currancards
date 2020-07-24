import React, {useState} from "react";
import Style from "./RugCard.module.scss";
import Swatch from "./Swatch";
import Slider from "./Slider";

// This variable sets how many swatches are rendered at
// the footers of the cards
const maxColors = 5;

// I had two different ideas that went with after sourcing
// different ideas from other online retailers. I thought
// Amazon had a neat and intuitive solution to the rendering
// of different color item selections
export function RugCard({rug}) {

    // Keeps track of what index value in the data array is selected
    // By default the first is selected
    const [selected, setSelected] = useState(0)

    // Maps the swatch faux data into the swatch component
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

// This is another iteration I thought would also be a viable
// candidate. Rather than only displaying the first few swatches
// users could cycle through the full array of swatches. The internal
// state and logic remains the same as above.
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

    // The footer swatch container is now rendered by a slider
    // react component that holds the paginated slider state and 
    // we use children props to dynamizally render the varying 
    // amounts of swatches
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