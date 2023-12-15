import { useCallback, useEffect, useState } from "react";
import "./App.css";

function App() {
  const [batteryLevel, setBatteryLevel] = useState(0);
  const [isCharging, setIsCharging] = useState(false);

  const getBattery = useCallback(async () => {
    if (window.navigator && window.navigator.getBattery) {
      const battery = await window.navigator.getBattery();
      if (battery.level !== batteryLevel) {
        setBatteryLevel(battery.level * 100);
      }
      if (battery.charging !== isCharging) {
        setIsCharging(battery.charging);
      }
    }
  }, [isCharging, batteryLevel]);

  useEffect(() => {
    const interval = setInterval(() => {
      getBattery();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="container">
      <div
        className={`battery-container ${isCharging ? "scale-animation" : ""}`}
      >
        <div className="battery-inner">
          <div className="progress" style={{ width: `${batteryLevel}%` }}></div>
          <div className="battery-result">{batteryLevel}%</div>
        </div>
        <div className="battery-handle"></div>
      </div>
    </main>
  );
}

export default App;
