import React from 'react';

import GraphCard from './GraphCard';
import IMUGraph from './IMU/IMUGraph';
import SpeedGraph from './Speed/SpeedGraph';
import TemperatureGraph from './Temperature/TemperatureGraph';

function Graphs({graphs, data, xKey, removeGraph}) {
  const dataKeys = Object.keys(data[0]);

  const renderGraph = graph => (
    dataKeys.includes(graph.id) &&
    <GraphCard key={graph.id} id={graph.id} onClick={removeGraph}>
      {graph.category == "temperature" && <TemperatureGraph data={data} xKey={xKey} yKey={graph.id} />}
      {graph.category == "speed" && <SpeedGraph data={data} xKey={xKey} yKey={graph.id} />}
      {graph.category == "imu" && <IMUGraph data={data} xKey={xKey} yKey={graph.id} />}
    </GraphCard>
  )

  return (
    graphs.map(graph => renderGraph(graph))
  )
}

export default Graphs;