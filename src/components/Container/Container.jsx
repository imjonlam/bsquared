import React, {useState, useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from "@fortawesome/free-solid-svg-icons";

function Container({children}) {
  return(
    <div className="bg-blue-100 h-32">
      <div className="bg-yellow-50 h-6 flex justify-end items-center">
        <button className="px-2 h-full">
          <FontAwesomeIcon icon={faTimes} size="xs"/>
        </button>
      </div>
      {children}
    </div>
  );
}

export default Container;