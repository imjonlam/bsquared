import React, {useState, useEffect} from 'react';

function TemperatureMenu() {
  const [isClosed, setClosed] = useState(true);
  
  return (
    <li onClick={() => setClosed(!isClosed)}>
      <span className="p-3 flex hover:bg-gray-400 active:bg-gray-500">Tire Temperatures</span>
      {!isClosed && (
        <ul>
          <li className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500"><a href=""> FL Outer </a></li>
          <li className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500"><a href=""> FL Inner </a></li>
          <li className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500"><a href=""> FR Outer </a></li>
          <li className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500"><a href=""> FR Inner </a></li>
          <li className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500"><a href=""> RL Outer </a></li>
          <li className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500"><a href=""> RL Inner </a></li>
          <li className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500"><a href=""> RR Outer </a></li>
          <li className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500"><a href=""> RR Inner </a></li>
        </ul>
      )}
    </li>
  )
}

export default TemperatureMenu;