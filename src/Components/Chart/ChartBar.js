import React from 'react'
import './ChartBar.css'

function ChartBar(props) {
     console.log(props.label , props.value)
    let barHeight='0%';
    if(props.maxValue>0){
        barHeight=Math.round((props.value/props.maxValue)*100)+"%"
    }
  return (
    <div className='char-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:barHeight}}></div>
        </div>
        <div className='.chart-bar__label'>{props.label}</div>
    </div>
  )
}

export default ChartBar