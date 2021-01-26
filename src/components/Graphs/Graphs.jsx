import React from 'react';
import IMUGraph from './IMU/IMUGraph';
import SpeedGraph from './Speed/SpeedGraph';
import TemperatureGraph from './Temperature/TemperatureGraph';

function Graphs({graphs, data, removeGraph}) {

  const render = (id, category) => (
    <div id={id} className="flex flex-col">
      <div className="flex w-full justify-end bg-gray-200">
        <button onClick={() => removeGraph(id)} className="px-4 h-full focus:outline-none undraggable active:text-blue-500">X</button>
      </div>
      <div className="flex justify-center">
        {category == "temperature" && <TemperatureGraph data={data} xKey={'SecondsMilliseconds'} yKey={id} />}
        {category == "speed" && <SpeedGraph data={data} xKey={'SecondsMilliseconds'} yKey={id} />}
        {category == "imu" && <IMUGraph data={data} xKey={'SecondsMilliseconds'} yKey={id} />}
      </div>
    </div>
  )

  return(
    <div className="flex flex-grow flex-col overflow-y-auto">
      {graphs.map(graph => render(graph.id, graph.category))}
    </div>
  )
}

export default Graphs;