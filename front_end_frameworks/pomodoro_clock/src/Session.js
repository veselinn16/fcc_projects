import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import {
  decreaseSeconds,
  storeInterval,
  toggleBreak,
  toggleSound
} from "./actions";

const Session = ({
  isRunning,
  time,
  decreaseSeconds,
  storeInterval,
  breakLength,
  sessionLength,
  interval,
  toggleBreak,
  breakRunning,
  soundOn,
  toggleSound
}) => {
  // refs to time elements
  const mins = useRef(null);
  const secs = useRef(null);
  const audio = useRef(null);

  const playSound = () => {
    audio.current.play();
  };

  // for the future :D
  // const rewind = () => {
  //   audio.current.pause();
  // };

  useEffect(() => {
    if (soundOn && isRunning) {
      playSound();
      setTimeout(() => {
        toggleSound();
      }, 2000);
    }
    if (isRunning && !interval) startTimer();
    if (mins.current.innerText + secs.current.innerText === "001") {
      setTimeout(() => {
        playSound();
      }, 1000);

      setTimeout(() => {
        breakRunning ? toggleBreak(sessionLength) : toggleBreak(breakLength);
      }, 2000);
    }
  });

  const startTimer = () => {
    const timer = setInterval(() => {
      decreaseSeconds();
    }, 1000);
    storeInterval(timer);
  };

  // array destructuring of time array
  const [minutes, seconds] = time;

  return (
    <div className="session">
      <h3 id="timer-label">{breakRunning ? "Break" : "Session"}</h3>
      <div className="timer">
        <p id="time-left">
          <span id="mins" ref={mins}>
            {minutes}
          </span>
          <span>:</span>
          <span id="secs" ref={secs}>
            {seconds}
          </span>
          <audio ref={audio} id="beep">
            <source src="./audio/114.wav" type="audio/wav"></source>
          </audio>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  time,
  sessionLength,
  isRunning,
  breakRunning,
  seconds,
  breakLength,
  minutes,
  interval,
  soundOn
}) => ({
  isRunning,
  breakRunning,
  sessionLength,
  seconds,
  minutes,
  breakLength,
  time,
  interval,
  soundOn
});

const mapDispatchToProps = dispatch => ({
  decreaseSeconds: () => dispatch(decreaseSeconds()),
  storeInterval: timer => dispatch(storeInterval(timer)),
  toggleBreak: mins => dispatch(toggleBreak(mins)),
  toggleSound: () => dispatch(toggleSound())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Session);
