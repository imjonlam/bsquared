import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

function TitleBar(props) {
  return (
    <div id="titlebar">
      <div id="left">
        <button id="menu-btn">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <span id="title">{props.title}</span>
      </div>
      <div id="right">
        <button id="min-btn">
          <FontAwesomeIcon icon={faMinus}/>
        </button>
        <button id="max-btn">
          <FontAwesomeIcon icon={faSquare} />
        </button>
        <button id="close-btn">
          <FontAwesomeIcon icon={faTimes}/>
        </button>
      </div>
    </div>
  );
}

export default TitleBar;