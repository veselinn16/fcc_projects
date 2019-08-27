import React from "react";
import { connect } from "react-redux";
import { resetTimer, toggleRunning, pauseTimer } from "./actions";

const Controls = ({ isRunning, pauseTimer, resetTimer, play }) => {
  // const reset = () => {
  //   resetTimer();
  //   stopSound();
  // };

  // const stopSound = () => {
  //   toggleSound();
  // };

  return (
    <div className="controls-container">
      <button
        className="btn-control play"
        id="start_stop"
        onClick={isRunning ? pauseTimer : play}
      >
        {isRunning ? "Pause" : "Play"}
      </button>
      <button className="btn-control stop" id="reset" onClick={resetTimer}>
        Reset
      </button>
    </div>
  );
};

const mapStateToProps = ({ isRunning }) => ({
  isRunning
});

const mapDispatchToProps = dispatch => ({
  resetTimer: () => dispatch(resetTimer()),
  pauseTimer: () => dispatch(pauseTimer()),
  play: () => dispatch(toggleRunning())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);
