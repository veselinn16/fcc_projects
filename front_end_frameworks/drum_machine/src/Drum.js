import React, { useRef, useEffect } from 'react';

const Drum = ({ data, pressedKey, setKey, setActiveString }) => {
  useEffect(() => {
    if (pressedKey === data.key.toLowerCase()) {
      setActiveString(data.string);
      playSound();
    }
  });
  const audio = useRef(null);

  const playSound = () => {
    setActiveString(data.string);
    audio.current.play();
  };

  return (
    <button className="drum-pad" id={data.key} onClick={playSound}>
      {data.key}
      <audio
        type="audio/wav"
        src={data.sound}
        ref={audio}
        className="clip"
        id={data.key}
      ></audio>
    </button>
  );
};

export default Drum;
