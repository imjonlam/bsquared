import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Instructions() {
  return (
    <div className="flex flex-grow items-center justify-center select-none">
      <div className="flex flex-col">
        <h1 className="text-center">Instructions:</h1>
        <p>1) Click on <FontAwesomeIcon icon={faBars} size="xs"/> -&gt; File -&gt; Load Data</p>
        <p>2) Choose charts on sidebar</p>
      </div>
    </div>
  )
}

export default Instructions;