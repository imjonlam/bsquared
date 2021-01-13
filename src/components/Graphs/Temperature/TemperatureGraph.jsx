import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function TemperatureGraph({data}) {
  return (
    <div className="chart-wrapper select-none">
      <LineChart width={600} height={300} data={data} margin={{ top: 50, right: 30, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="Temperature" stroke="#8884d8" dot={false}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="Time" />
        <YAxis/>
        <Tooltip />
      </LineChart>
    </div>
  );
}

export default TemperatureGraph;