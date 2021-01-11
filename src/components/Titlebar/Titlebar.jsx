import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMinus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {faSquare} from "@fortawesome/free-regular-svg-icons";

import './webkit.css'
import 'tailwindcss/tailwind.css';

function Titlebar() {
  return (
    <header className="bg-white border-b h-8 flex justify-between">
      <div className="mt-px flex flex-grow draggable"></div>
      <div className="flex items-center justify-end">
        <button id="min-btn" className="px-4 h-full focus:outline-none hover:bg-gray-400 active:bg-gray-500 undraggable">
          <FontAwesomeIcon icon={faMinus}/>
        </button>
        <button id="max-btn" className="px-4 h-full focus:outline-none hover:bg-gray-400 active:bg-gray-500 undraggable">
          <FontAwesomeIcon icon={faSquare}/>
        </button>
        <button id="close-btn" className="px-4 h-full focus:outline-none hover:bg-gray-400 active:bg-gray-500 undraggable">
          <FontAwesomeIcon icon={faTimes}/>
        </button>
      </div>
    </header>
  );
}

export default Titlebar;