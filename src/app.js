import React, {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Titlebar from './components/Titlebar/Titlebar';

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

  const getCols = (xLabel, yLabel) => {
    data.map(row => ({xLabel: row[xLabel], yLabel: row[yLabel]}));
  }

  return (
    <div className="flex bg-gray-100 font-sans">
      <Sidebar onClick={!isLoading ? addGraph : undefined}/>
      <main className="flex flex-grow flex-col min-h-screen">
        <Titlebar />
        <div>
          {
            graphs.map(graph => <p key={graph.id}>{graph.id} - {graph.category}</p>)
          }
        </div>
      </main>
    </div>
  );
}

export default App;