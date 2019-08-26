import { combineReducers } from "redux";
import userInputReducer from "./userInputReducer";
import resultReducer from "./resultReducer";
import prevResultRedcer from "./prevResultReducer";

export default combineReducers({
  userInput: userInputReducer,
  result: resultReducer,
  prevResult: prevResultRedcer
});
