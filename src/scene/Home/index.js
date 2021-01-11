import React from 'react';
import Sidebar from './components/Sidebar'
import Titlebar from './components/Titlebar'

import 'tailwindcss/tailwind.css';

function Scene() {
  return(
    <div className="flex bg-gray-100 font-sans">
      <Sidebar />
      <main className="flex flex-grow flex-col min-h-screen">
        <Titlebar />
      </main>
    </div>
  );
}

export default Scene;