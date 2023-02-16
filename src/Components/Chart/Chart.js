import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'

function Chart({datapoints}) {
    const datamax=datapoints.map(datapoint=>datapoint.value);
    const maxValue=Math.max(...datamax);

  return (
    <div className='chart'>
        {datapoints.map(datapoint=><ChartBar value={datapoint.value} maxValue={maxValue} label={datapoint.label} key={datapoint.label}/>)}
    </div>
  )
}

export default Chart