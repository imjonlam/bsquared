import React, {useState, useEffect} from 'react';

import 'tailwindcss/tailwind.css';

function Graphs(props) {
  const [data, setData] = useState(null);  
  const [graphs, addGraphs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /* Handle CSV data */
  useEffect(() => {
    api.receive('get-csv', response => {
      const url = response.filePaths[0];
      window.postMessage({type: 'request', content: url})
    });

    window.addEventListener('message', e => {
      if (e.source !== window) return;
      if (e.data.type == 'response') {
        const data = e.data.content;
        console.log(data);
        setData(data);
        setIsLoading(false);
      }
    });
  }, []);

  /* Handle Graph creation */
  useEffect(() => {
    if (props.graphID) {
      addGraphs(previousState => {
        return [
          ...previousState,
          props.graphID
        ];
      });
    }

  }, [props.graphID]);

  






















  return (
    <div>{graphs}</div>
  );
}

export default Graphs;

/*
Graphs does two things:
1) Hold CSV Data
2) Create Graph(S)

*/