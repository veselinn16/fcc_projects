import { TOGGLE_RUNNING, PAUSE, RESET } from "../actions/actionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_RUNNING:
      return !state;
    case PAUSE:
      return !state;
    case RESET:
      return !state;
    default:
      return state;
  }
};
