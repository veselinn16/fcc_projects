import { STORE_INTERVAL, PAUSE, RESET } from "../actions/actionTypes";

export default (state = null, action) => {
  switch (action.type) {
    case STORE_INTERVAL:
      return action.payload;
    case PAUSE:
      clearInterval(state);
      return null;
    case RESET:
      clearInterval(state);
      return null;
    default:
      return state;
  }
};
