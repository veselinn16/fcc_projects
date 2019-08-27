import {
  INC_SESSION,
  DEC_SESSION,
  RESET,
  DEC_SECS
} from "../actions/actionTypes";

export default (state = "25", action) => {
  switch (action.type) {
    case INC_SESSION:
      return state <= 59 ? `${+state + 1}` : state;
    case DEC_SESSION:
      return state >= 2 ? `${+state - 1}` : state;
    case RESET:
      return "25";
    case DEC_SECS:
      return state;
    default:
      return state;
  }
};
