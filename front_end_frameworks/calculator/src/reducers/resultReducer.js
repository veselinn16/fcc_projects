import {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  EQUALS,
  UPDATE_INPUT,
  CLEAR
} from "../actions/actionTypes";

import { validateUserInput } from "../utils/validateInput";

const calculateOutcome = () => {
  const equation = document.querySelector(".display-calculation").innerText;

  if (!/[0-9]/.test(+equation[equation.length - 1])) {
    return equation[equation.length - 1];
  }

  // calculate outcome of user input by substituting x with *
  let result = eval(equation);
  // decides whether number needs to be truncated to 4 nums after decimal
  let resultStr = result.toString();
  if (
    resultStr.includes(".") &&
    resultStr.indexOf(".") + 5 < resultStr.length
  ) {
    return result.toFixed(4);
  }

  return result.toString();
};

const determineInput = (currentInput, input) => {
  // could be replaced with state field
  let displayText = document.querySelector(".display-calculation").innerText;

  // return input if there is a calculation on the display
  if (displayText.search("=") !== -1) return input;

  if (/[X/\+-]/.test(currentInput)) {
    return input;
  }

  return validateUserInput(currentInput, input);
};

export default (state = "0", action) => {
  switch (action.type) {
    case CLEAR:
      return "0";
    case EQUALS:
      return calculateOutcome();
    case UPDATE_INPUT:
      return determineInput(state, action.payload);
    case DIVIDE:
      return state[state.length - 1] === "." ? state : action.payload;
    case MULTIPLY:
      return state[state.length - 1] === "." ? state : action.payload;
    case ADD:
      return state[state.length - 1] === "." ? state : action.payload;
    case SUBTRACT:
      return state[state.length - 1] === "." ? state : action.payload;
    default:
      return state;
  }
};
