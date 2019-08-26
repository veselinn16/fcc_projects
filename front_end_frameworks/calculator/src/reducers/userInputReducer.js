import {
  UPDATE_INPUT,
  CLEAR,
  EQUALS,
  ADD,
  DIVIDE,
  MULTIPLY,
  SUBTRACT
} from "../actions/actionTypes";

import { validateUserInput } from "../utils/validateInput";

const determineOperation = (userInput, operation) => {
  // substitute X with * if opearation is multiply
  operation = operation === "X" ? "*" : operation;

  // get last two chars of equation and if they are both operations,
  // substitues them with the current operation the user is requesting
  let trunc = userInput.slice(-2);
  if (!/[0-9]/.test(trunc)) return userInput.replace(trunc, operation);

  // last character of current input
  let lastChar = userInput[userInput.length - 1];

  // do nothing if the last character is a decimal dot
  if (lastChar === ".") return userInput;

  // enable operations with negative numbers - special case overriding function below
  if (operation === "-" && /[*/\+]/.test(lastChar))
    return userInput + operation;

  // change operation if last character of user input is operation as well
  if (/[*/\+-]/.test(lastChar)) {
    // if the user is trying to change the operation
    let updatedUserInput = userInput.replace(
      userInput[userInput.length - 1],
      operation
    );
    return updatedUserInput;
  }

  // perform operation on result returned after calculation
  let indexOfEquals = userInput.search("=") + 1;
  let result = userInput.substring(indexOfEquals);
  if (result) {
    return result + operation;
  }

  return `${userInput}${operation}`;
};

const calc = eq => {
  // result in number type
  let result = eval(eq);

  // result in string type
  let resultStr = result.toString();

  // if result is too big, truncate it to 4 places after decimal
  if (
    resultStr.includes(".") &&
    resultStr.indexOf(".") + 5 < resultStr.length
  ) {
    return `${eq}=${result.toFixed(4).toString()}`;
  }

  // return equation, followed by equals sign and result
  return `${eq}=${resultStr}`;
};

export default (state = "0", action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return validateUserInput(state, action.payload);
    case CLEAR:
      return "0";
    case EQUALS:
      return calc(state);
    /// new
    case ADD:
      return determineOperation(state, action.payload);
    case SUBTRACT:
      return determineOperation(state, action.payload);
    case MULTIPLY:
      return determineOperation(state, action.payload);
    case DIVIDE:
      return determineOperation(state, action.payload);
    default:
      return state;
  }
};
