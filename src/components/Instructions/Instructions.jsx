import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

import 'tailwindcss/tailwind.css';

function Instructions({isLoading}) {
  const partOne = (
    <React.Fragment>
      <p>1) Click on <FontAwesomeIcon icon={faBars} size="xs"/> -&gt; File -&gt; Load Data</p>
      <p>2) Choose charts on the sidebar</p>
    </React.Fragment>
  )

  const partTwo = (
    <p>1) Choose charts on the sidebar</p>
  )

  return (
    <div className="flex flex-grow items-center justify-center select-none">
      <div className="flex-col">
        <h1 className="text-center">Instructions:</h1>
        {isLoading ? partOne : partTwo}
      </div>
    </div>
  )
}

export default Instructions;