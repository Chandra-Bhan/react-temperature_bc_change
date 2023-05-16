import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [temperature, setTemperature] = useState(10);
  const [backColor, setBackColor] = useState('#1C5470');

  useEffect(() => {
    if (temperature > 20 && temperature <= 30) {
      setBackColor('yellow');
    } else if (temperature > 30 && temperature <= 50) {
      setBackColor('orange');
    } else if (temperature > 50) {
      setBackColor('red');
    } else {
      setBackColor('#1C5470');
    }
  }, [temperature]);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'tomato' }}>
        Temperature Application
      </h1>
      <div
        style={{
          backgroundColor: backColor,
          color: 'white',
          border: '1px solid black',
          display: 'flex',
          padding: '100px',
          margin: 'auto',
          width: '200px',
          borderRadius: '10px',
        }}
      >
        <div style={{ margin: 'auto', width: '100%' }}>
          <div
            style={{
              backgroundColor: '#0B40AA',
              width: '5rem',
              height: '5rem',
              padding: '30px',
              borderRadius: '50%',
              textAlign: 'center',
              border: '2px solid white',
              margin: 'auto',
            }}
          >
            <h2>
              {temperature}
              <sup>o</sup>C
            </h2>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: '30px',
              justifyContent: 'space-evenly',
            }}
          >
            <div
              style={{
                width: '70px',
                height: '70px',
                textAlign: 'center',
                backgroundColor: '#6D6769',
                borderRadius: '50%',
                cursor: 'pointer',
              }}
              onClick={() => setTemperature(temperature + 1)}
            >
              <h2>+</h2>
            </div>
            <div
              style={{
                width: '70px',
                cursor: 'pointer',
                height: '70px',
                textAlign: 'center',
                backgroundColor: '#6D6769',
                borderRadius: '50%',
              }}
              onClick={() => setTemperature(temperature - 1)}
            >
              <h2>-</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
