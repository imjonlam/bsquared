import React from 'react';

function GraphCard(props) {
  const sendID = () => props.onClick(props.id);
      
  return (
    <div id={props.id} className="flex flex-col">
      <div className="flex justify-end bg-gray-200">
        <button onClick={sendID} className="px-4 h-full focus:outline-none undraggable active:text-blue-500">X</button>
      </div>
      <div className="flex justify-center">
        {props.children}
      </div>
    </div>
  )
}

export default GraphCard;