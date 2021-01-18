import React, {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Titlebar from './components/Titlebar/Titlebar';
import Instructions from './components/Instructions/Instructions';
import Generator from './components/Graphs/Generator';

import 'tailwindcss/tailwind.css';

function App() {
  const [data, setData] = useState(null);
  const [graphs, setGraphs] = useState([]);
  const [isLoading, setLoading] = useState(true);

  /* Handle CSV */
  useEffect(() => {
    api.receive('get-csv', response => {
      const url = response.filePaths[0];
      window.postMessage({type: 'request', content: url})
    });

    window.addEventListener('message', e => {
      if (e.source !== window) return;
      if (e.data.type == 'response') {
        setData(e.data.content);
        setGraphs([]);
        setLoading(false); 
      }
    });
  }, []);

  const addGraph = (id, type_) => {
    setGraphs(prev => !prev.some(graph => graph.id == id) ? [...prev, {id: id, category: type_}] : prev);
  }

  const removeGraph = id => {
    setGraphs(prev => prev.filter(graph => graph.id != id));
  }

  return (
    <div id="app" className="h-screen flex flex-col bg-gray-100 font-sans">
      <Titlebar />
      <main className="flex flex-grow overflow-hidden">
        <Sidebar onClick={!isLoading ? addGraph : undefined}/>
        <div className="flex flex-grow flex-col overflow-y-auto">
          {graphs.length == 0 ?
            <Instructions dataLoaded={!isLoading} /> :
            <Generator graphs={graphs} data={data} removeGraph={removeGraph}/>
          }
        </div>
      </main>
    </div>
  );
}

export default App;