import React, {useState, useEffect} from 'react';

import 'tailwindcss/tailwind.css';

function Graphs(props) {
  const [data, setData] = useState(null);  
  const [graphs, addGraphs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // get selected csv path and send to papa.parse
    api.receive('get-csv', response => {
      const url = response.filePaths[0];
      window.postMessage({type: 'request', content: url})
    });

    // process papa.parse response
    window.addEventListener('message', e => {
      if (e.source !== window) return;
      if (e.data.type == 'response') {
        const data = e.data.content;
        console.log(data);
        setData(data);
      }
    });
  }, []);

  useEffect(() => {
    if (props.graphID) {
      addGraphs(previousState => {
        return [
          ...previousState,
          props.graphID
        ];
      });
    }

    console.log(graphs);
  }, [props.graphID]);

  return (
    <div>{graphs}</div>
  );
}

export default Graphs;