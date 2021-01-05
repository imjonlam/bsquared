import React, { useState, useEffect } from 'react';

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
      if (event.source !== window) return
      if (event.data.type == 'response') {
        console.log(event.data.content)
      }
    });




  }, []);
  
  return (
    <h1>hello graph</h1>
  );
}

export default Graph;

