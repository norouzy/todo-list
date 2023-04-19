import React from "react";
import './ChartBar.css'

const ChartBar = (probs) =>{
    let barFillHeight = '0%';

    if(probs.maxValue > 0){
        barFillHeight = Math.round((probs.value / probs.maxValue) * 100) + '%'
        console.log(probs.label + " : "+ probs.maxValue + " = > "+ probs.value )
    }

    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height: barFillHeight, 'background-color' : '#4826b9'}}></div>
            </div>
            <div className="chart-bar__label">{probs.label}</div>
        </div>
    )
}
export default ChartBar;