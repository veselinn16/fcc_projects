import React from "react";
import { connect } from "react-redux";
import { buttonChars } from "./utils/buttonChars";

// object containing action creators
import { acs } from "./actions";

const Button = props => {
  const decideHandler = char => {
    return props[char] ? props[char] : props["updateUserInput"];
  };

  return (
    <button
      className="button"
      id={props.char}
      onClick={decideHandler(props.char)}
    >
      {buttonChars[props.char]}
    </button>
  );
};

const mapDispatchToProps = dispatch => {
  let actionCreators = {};
  // map every action creator in imported object of action creators to dispatch
  for (let ac in acs) {
    actionCreators[ac] = e => dispatch(acs[ac](e));
  }
  return actionCreators;
};

export default connect(
  null,
  mapDispatchToProps
)(Button);
