import React from "react";
import { connect } from "react-redux";
import { changeBreak, changeSession } from "./actions";

const Stepper = ({
  isRunning,
  type,
  breakLength,
  actionCreator,
  sessionLength
}) => (
  <div className="stepper-container">
    <h2 id={`${type}-label`}>{type} length</h2>
    <div className="stepper">
      <button
        className="btn-control"
        onClick={isRunning ? null : () => actionCreator(true)}
      >
        <i className={`fa fa-angle-up`} id={`${type}-increment`} />
      </button>
      <p id={`${type}-length`}>
        {type === "break" ? breakLength : sessionLength}
      </p>
      <button
        className="btn-control"
        onClick={isRunning ? null : () => actionCreator(false)}
      >
        <i className="fa fa-angle-down" id={`${type}-decrement`} />
      </button>
    </div>
  </div>
);

const mapStateToProps = ({ isRunning, breakLength, sessionLength }) => ({
  isRunning,
  breakLength,
  sessionLength
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const actionCreator = ownProps.type === "break" ? changeBreak : changeSession;
  return {
    actionCreator: bool => dispatch(actionCreator(bool))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stepper);
