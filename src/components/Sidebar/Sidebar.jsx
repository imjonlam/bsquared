import React, {useState} from 'react';

import './webkit.css'
import 'tailwindcss/tailwind.css';

function Sidebar({onClick}) {
  const [isOpenTemp, setTemp] = useState(false);
  const [isOpenIMU, setIMU] = useState(false);
  const [isOpenSpeed, setSpeed] = useState(false);

  const toggleTempMenu = () => setTemp(!isOpenTemp)
  const toggleIMUMenu = () => setIMU(!isOpenIMU)
  const toggleSpeedMenu = () => setSpeed(!isOpenSpeed)
  
  const sendID = onClick ? e => onClick(e.target.id, e.target.parentNode.id) : undefined;
  
  return (
    <aside className="bg-white w-40 border-r overflow-y-auto">
      <nav className="flex  flex-col flex-grow">
        <ul className="select-none w-full">
          <li>
            <span onClick={toggleTempMenu} className="p-2 flex hover:bg-gray-400 active:bg-gray-500">Tire Temperatures</span>
            {isOpenTemp && (
              <ul id="temperature" className="text-xs">
                <li id="FL Outer" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">FL Outer</li>
                <li id="FL Inner" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">FL Inner</li>
                <li id="FR Outer" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">FR Outer</li>
                <li id="FR Inner" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">FR Inner</li>
                <li id="RL Outer" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RL Outer</li>
                <li id="RL Inner" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RL Inner</li>
                <li id="RR Outer" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RR Outer</li>
                <li id="RR Inner" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RR Inner</li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleIMUMenu} className="p-2 flex hover:bg-gray-400 active:bg-gray-500">IMU</span>
            {isOpenIMU && (
              <ul id="imu" className="text-xs">
                <li id="AcX" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">AcX</li>
                <li id="AcY" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">AcY</li>
                <li id="AcZ" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">AcZ</li>
                <li id="GyX" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">GyX</li>
                <li id="GyY" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">GyY</li>
                <li id="GyZ" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">GyZ</li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleSpeedMenu} className="p-2 flex hover:bg-gray-400 active:bg-gray-500">Speed</span>
            {isOpenSpeed && (
              <ul id="speed" className="text-xs">
                <li id="GPS Speed" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">GPS Speed</li>
                <li id="Vehicle Speed" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">Vehicle Speed</li>
                <li id="RPM" onClick={sendID} className="pl-6 py-1 hover:bg-gray-400 active:bg-gray-500">RPM</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;