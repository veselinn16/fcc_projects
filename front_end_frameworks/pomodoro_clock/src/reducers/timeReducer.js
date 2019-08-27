import {
  RESET,
  DEC_SECS,
  PAUSE,
  INC_SESSION,
  DEC_SESSION,
  TOGGLE_BREAK
} from "../actions/actionTypes";

const calcSeconds = ([minutes, secs]) => {
  // when timer has ended
  if (secs === "00" && minutes === "0") return [minutes, secs];

  // when minute ends, decrease minute and return 59 secs
  if (secs === "00") return [`${minutes - 1}`, "59"];

  // new seconds
  const newSecs = `${secs - 1}`;

  // return double digit always
  if (newSecs < 10) {
    return [minutes, `0${newSecs}`];
  }

  // if all of the above cases are not applicable
  return [minutes, newSecs];
};

const determineMinutes = (time, type) => {
  const [mins, secs] = time;
  if (type) {
    if (+mins === 60) return time;
    return [`${+mins + 1}`, secs];
  } else {
    if (+mins === 1) return time;
    return [`${+mins - 1}`, secs];
  }
};

export default (state = ["25", "00"], action) => {
  switch (action.type) {
    case INC_SESSION:
      return determineMinutes(state, action.payload);
    case DEC_SESSION:
      return determineMinutes(state, action.payload);
    case RESET:
      return ["25", "00"];
    case DEC_SECS:
      return calcSeconds(state);
    case PAUSE:
      return state;
    case TOGGLE_BREAK:
      return [action.payload, state[1]];
    default:
      return state;
  }
};
