import React, { useState, useEffect } from 'react';
import Drum from './Drum';
import Display from './Display';

import data from './data';

const App = () => {
  const [pressedKey, setKey] = useState(null);
  const [activeString, setActiveString] = useState(null);

  useEffect(() => {
    document.body.addEventListener('keypress', e => setKey(e.key));
  }, []);

  return (
    <div id="drum-machine">
      <header className="header">
        <h1 className="logo">Get Your Drum On...</h1>
      </header>
      <div className="drums">
        <Display pKey={pressedKey} activeString={activeString} />
        <div className="drum-pads">
          {data.map((el, i) => (
            <Drum
              data={el}
              identifier={i}
              key={i}
              pressedKey={pressedKey}
              setKey={setKey}
              setActiveString={setActiveString}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
