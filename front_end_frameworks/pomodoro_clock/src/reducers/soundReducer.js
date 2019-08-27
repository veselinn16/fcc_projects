import { TOGGLE_SOUND } from "../actions/actionTypes";

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_SOUND:
      return !state;
    default:
      return state;
  }
};
