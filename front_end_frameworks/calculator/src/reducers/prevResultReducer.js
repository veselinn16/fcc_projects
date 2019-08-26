import { EQUALS } from "../actions/actionTypes";

const getResult = () => {
  let equation = document.querySelector("#display").innerText;
  return eval(equation).toString();
};

export default (state = null, action) => {
  switch (action.type) {
    case EQUALS:
      return getResult();
    default:
      return state;
  }
};
