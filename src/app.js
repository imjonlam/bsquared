import React from 'react';
import Sidebar from './components/Sidebar/Sidebar'
import Titlebar from './components/Titlebar/Titlebar'

import 'tailwindcss/tailwind.css';
function App() {
  return(
    <div className="flex bg-gray-100 font-sans">
      <Sidebar />
      <main className="flex flex-grow flex-col min-h-screen">
        <Titlebar />
      </main>
    </div>
  );
}

export default App;