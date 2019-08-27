import React, { Fragment } from "react";
import "./App.css";
import Stepper from "./Stepper";
import Session from "./Session";
import Controls from "./Controls";
import Footer from "./Footer";

const App = () => (
  <Fragment>
    <div className="clock-container">
      <h1 className="title">pomodoro clock</h1>
      <div className="steppers">
        <Stepper type={"break"} />
        <Session />
        <Stepper type={"session"} />
      </div>
      <Controls />
      <Footer />
    </div>
  </Fragment>
);

export default App;
