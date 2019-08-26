import {
  UPDATE_INPUT,
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  EQUALS,
  CLEAR
} from "./actionTypes";

export const updateUserInput = e => {
  return {
    type: UPDATE_INPUT,
    payload: e.target.innerText
  };
};

export const clear = () => {
  return {
    type: CLEAR,
    payload: "0"
  };
};

export const multiply = () => ({
  type: MULTIPLY,
  payload: "X"
});

export const divide = () => ({
  type: DIVIDE,
  payload: "/"
});

export const subtract = () => ({
  type: SUBTRACT,
  payload: "-"
});

export const add = () => ({
  type: ADD,
  payload: "+"
});

export const equals = equation => {
  return {
    type: EQUALS,
    payload: equation
  };
};

export const acs = {
  multiply,
  divide,
  add,
  subtract,
  clear,
  equals,
  updateUserInput
};

// console.log(props);
// switch (char) {
//   case "equals":
//     return props.equals;
//   case "divide":
//     return props.divide;
//   case "subtract":
//     return props.subtract;
//   case "multiply":
//     return props.multiply;
//   case "add":
//     return props.add;
//   case "clear":
//     return props.clear;
//   default:
//     return props.updateUserInput;
// }

// return {
//   updateUserInput: e => dispatch(updateUserInput(e)),
//   clear: () => dispatch(clear()),
//   add: () => dispatch(add()),
//   multiply: () => dispatch(multiply()),
//   divide: () => dispatch(divide()),
//   subtract: () => dispatch(subtract()),
//   equals: eq => dispatch(equals(eq))
// };
