import React from 'react';
import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

function SpeedGraph({data, xKey, yKey}) {
  
  return(
    <ResponsiveContainer width="90%" height={300}>
      <LineChart data={data} margin={{ top: 50, right: 30, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey={yKey} stroke="#8884d8" dot={false}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey={xKey} />
        <YAxis/>
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  ) 
}

export default SpeedGraph;