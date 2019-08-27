import { combineReducers } from "redux";
import isRunningReducer from "./isRunningReducer";
import breakLengthReducer from "./breakLengthReducer";
import sessionLengthReducer from "./sessionLengthReducer";
import intervalReducer from "./intervalReducer";
import timeReducer from "./timeReducer";
import breakRunningReducer from "./breakRunningReducer";
import soundReducer from "./soundReducer";

export default combineReducers({
  isRunning: isRunningReducer,
  breakLength: breakLengthReducer,
  sessionLength: sessionLengthReducer,
  time: timeReducer,
  interval: intervalReducer,
  breakRunning: breakRunningReducer,
  soundOn: soundReducer
});
