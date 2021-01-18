import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Instructions({dataLoaded}) {
  const loadData = (
    <React.Fragment>
      <p>1) Click on <FontAwesomeIcon icon={faBars} size="xs"/> -&gt; File -&gt; Load Data</p>
      <p>2) Choose charts on the sidebar</p>
    </React.Fragment>
  )

  const loadGraph = (
    <p>1) Choose charts on the sidebar</p>
  )

  return (
    <div className="flex flex-grow items-center justify-center select-none">
      <div className="flex flex-col">
        <h1 className="text-center">Instructions:</h1>
        {dataLoaded ? loadGraph : loadData}
      </div>
    </div>
  )
}

export default Instructions;