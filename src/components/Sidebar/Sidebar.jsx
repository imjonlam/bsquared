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

  const menuCSS = 'p-2 flex hover:bg-gray-400 active:bg-gray-500';
  const subMenuCSS = 'pl-6 py-1 hover:bg-gray-400 active:bg-gray-500';

  return (
    <aside className="flex flex-shrink-0 bg-white w-40 border-r overflow-y-auto">
      <nav className="flex-grow">
        <ul className="select-none">
          <li>
            <span onClick={toggleTempMenu} className={menuCSS}>Tire Temperatures</span>
            {isOpenTemp && (
              <ul id="temperature" className="text-xs">
                <li id="FL Outer" onClick={sendID} className={subMenuCSS}>FL Outer</li>
                <li id="FL Inner" onClick={sendID} className={subMenuCSS}>FL Inner</li>
                <li id="FR Outer" onClick={sendID} className={subMenuCSS}>FR Outer</li>
                <li id="FR Inner" onClick={sendID} className={subMenuCSS}>FR Inner</li>
                <li id="RL Outer" onClick={sendID} className={subMenuCSS}>RL Outer</li>
                <li id="RL Inner" onClick={sendID} className={subMenuCSS}>RL Inner</li>
                <li id="RR Outer" onClick={sendID} className={subMenuCSS}>RR Outer</li>
                <li id="RR Inner" onClick={sendID} className={subMenuCSS}>RR Inner</li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleIMUMenu} className={menuCSS}>IMU</span>
            {isOpenIMU && (
              <ul id="imu" className="text-xs">
                <li id="AcX" onClick={sendID} className={subMenuCSS}>AcX</li>
                <li id="AcY" onClick={sendID} className={subMenuCSS}>AcY</li>
                <li id="AcZ" onClick={sendID} className={subMenuCSS}>AcZ</li>
                <li id="GyX" onClick={sendID} className={subMenuCSS}>GyX</li>
                <li id="GyY" onClick={sendID} className={subMenuCSS}>GyY</li>
                <li id="GyZ" onClick={sendID} className={subMenuCSS}>GyZ</li>
              </ul>
            )}
          </li>
          <li>
            <span onClick={toggleSpeedMenu} className={menuCSS}>Speed</span>
            {isOpenSpeed && (
              <ul id="speed" className="text-xs">
                <li id="GPS Speed" onClick={sendID} className={subMenuCSS}>GPS Speed</li>
                <li id="Vehicle Speed" onClick={sendID} className={subMenuCSS}>Vehicle Speed</li>
                <li id="RPM" onClick={sendID} className={subMenuCSS}>RPM</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;