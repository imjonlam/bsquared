import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

import './webkit.css'
import 'tailwindcss/tailwind.css';

function Sidebar(props) {
  const [isTemperature, selectTemperature] = useState(false);
  const sendID = props.onClick ? e => props.onClick(e.target.id, e.target.parentNode.id) : undefined;
  
  return (
    <aside className="bg-white w-40 min-h-screen flex flex-col">
      <div className="h-8 border-r border-b flex flex-between items-center">
        <title className="ml-1 pl-1 flex flex-grow select-none draggable">BSquared</title>
        <button id="menu-btn" className="px-2 h-full focus:outline-none hover:bg-gray-400 active:bg-gray-500 undraggable">
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
      <div className="border-r flex-grow">
        <nav>
          <ul className="select-none">
            <li>
              <span onClick={() => selectTemperature(!isTemperature)} className="p-3 flex hover:bg-gray-400 active:bg-gray-500">Tire Temperatures</span>
              {isTemperature && (
                <ul id="temperature" className="text-xs">
                  <li id="FL Outer" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">FL Outer</li>
                  <li id="FL Inner" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">FL Inner</li>
                  <li id="FR Outer" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">FR Outer</li>
                  <li id="FR Inner" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">FR Inner</li>
                  <li id="RL Outer" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RL Outer</li>
                  <li id="RL Inner" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RL Inner</li>
                  <li id="RR Outer" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RR Outer</li>
                  <li id="RR Inner" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RR Inner</li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;