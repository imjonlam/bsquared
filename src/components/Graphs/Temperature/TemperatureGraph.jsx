import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function TemperatureGraph(props) {
  
  return(
    <LineChart width={600} height={300} data={props.data} margin={{ top: 50, right: 30, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey={props.yKey} stroke="#8884d8" dot={false}/>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey={props.xKey} />
      <YAxis/>
      <Tooltip />
    </LineChart>
  ) 
}

export default TemperatureGraph;