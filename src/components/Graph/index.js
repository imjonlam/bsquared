import React, { useState, useEffect } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

function Graph() {
  const [data, setData]  = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // get selected csv path and send to papa.parse
    api.receive('get-file', (response) => {
      const url = response.filePaths[0];
      window.postMessage({ type: 'request', content: url});
    });
    
    // process for papa.parse result
    window.addEventListener('message', (event) => {
      if (event.source !== window) return;
      if (event.data.type == 'response') {
        const data = event.data.content;
        console.log(data);

        setData(data);
        setIsLoading(false);
      }
    });
  }, []);
  
  return (
    <div className="chart-wrapper">
      {isLoading ?
      <div>Loading...</div> :
      <LineChart width={600} height={300} data={data} margin={{ top: 50, right: 30, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="Temperature" stroke="#8884d8" dot={false}/>
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="Time" />
        <YAxis/>
        <Tooltip />
     </LineChart>
      }
    </div>
  );
}

export default Graph;