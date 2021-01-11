import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

import TemperatureMenu from './TemperatureMenu'

import '../webkit.css'
import 'tailwindcss/tailwind.css';

function Sidebar() {  
  return (
    <aside className="bg-white w-50 min-h-screen flex flex-col">
      <div className="h-8 border-r border-b flex flex-between items-center">
        <title className="ml-1 pl-1 flex flex-grow select-none draggable">BSquared</title>
        <button id="menu-btn" className="px-2 h-full focus:outline-none hover:bg-gray-400 active:bg-gray-500 undraggable">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="border-r flex-grow">
        <nav>
          <ul className="select-none">
            <TemperatureMenu />
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;