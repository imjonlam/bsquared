import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faTimes, faBars} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-regular-svg-icons";

import './webkit.css'
import 'tailwindcss/tailwind.css';

function Titlebar() {
  const menuCSS = 'px-2 h-full focus:outline-none hover:bg-gray-400 active:bg-gray-500 undraggable';
  const btnCSS = 'px-4 focus:outline-none hover:bg-gray-400 active:bg-gray-500 undraggable';
  const exitCSS = 'px-4 focus:outline-none hover:bg-red-400 active:bg-red-500 undraggable';

  return (
    <header className="bg-white border-b h-8 flex justify-between">
      <div className="border-r w-40 flex items-center">
        <title className="ml-1 pl-1 flex flex-grow select-none draggable">BSquared</title>
        <button id="menu-btn" className={menuCSS}><FontAwesomeIcon icon={faBars} /></button>
      </div>
      <div className="mt-px flex-grow draggable"></div>
      <div className="flex justify-end">
        <button id="min-btn" className={btnCSS}><FontAwesomeIcon icon={faMinus}/></button>
        <button id="max-btn" className={btnCSS}><FontAwesomeIcon icon={faSquare}/></button>
        <button id="close-btn" className={exitCSS}><FontAwesomeIcon icon={faTimes}/></button>
      </div>
    </header>
  );
}

export default Titlebar;