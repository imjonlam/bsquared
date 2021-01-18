import React from 'react';

function GraphCard({id, onClick, children}) {
  const sendID = () => onClick(id);
      
  return (
    <div id={id} className="flex flex-col">
      <div className="flex justify-end bg-gray-200">
        <button onClick={sendID} className="px-4 h-full focus:outline-none undraggable active:text-blue-500">X</button>
      </div>
      <div className="flex justify-center">
        {children}
      </div>
    </div>
  )
}

export default GraphCard;