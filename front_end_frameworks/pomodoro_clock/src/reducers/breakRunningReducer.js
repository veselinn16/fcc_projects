import { TOGGLE_BREAK, RESET } from "../actions/actionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_BREAK:
      return !state;
    case RESET:
      return false;
    default:
      return state;
  }
};
