import React, {useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Titlebar from './components/Titlebar/Titlebar';
import Graphs from './components/Graphs/Graphs';

import 'tailwindcss/tailwind.css';

function App() {
	const [graphID, setGraphID] = useState('');

  return(
    <div className="flex bg-gray-100 font-sans">
      <Sidebar onClick={setGraphID}/>
      <main className="flex flex-grow flex-col min-h-screen">
        <Titlebar />
				<Graphs graphID={graphID}/>
      </main>
    </div>
  );
}

export default App;