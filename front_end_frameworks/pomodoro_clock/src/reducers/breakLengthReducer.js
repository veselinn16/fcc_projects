import { INC_BREAK, DEC_BREAK, RESET } from "../actions/actionTypes";

export default (state = "5", action) => {
  switch (action.type) {
    case INC_BREAK:
      return state <= 59 ? `${state + 1}` : state;
    case DEC_BREAK:
      return state >= 2 ? `${state - 1}` : state;
    case RESET:
      return "5";
    default:
      return state;
  }
};
