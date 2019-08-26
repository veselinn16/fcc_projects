import React from "react";
import { connect } from "react-redux";

const Display = ({ userInput, result, prevResult }) => {
  return (
    <div className="display-container">
      <div className="screen">
        <p className="display-calculation">{userInput}</p>
        <h1 id="display">{result}</h1>
      </div>
    </div>
  );
};

const mapStateToProps = ({ userInput, result, prevResult }) => {
  return {
    userInput,
    result,
    prevResult
  };
};

export default connect(
  mapStateToProps,
  null
)(Display);
