import {
  TOGGLE_RUNNING,
  RESET,
  INC_BREAK,
  DEC_BREAK,
  INC_SESSION,
  DEC_SESSION,
  DEC_SECS,
  DEC_MINS,
  PAUSE,
  STORE_INTERVAL,
  TOGGLE_BREAK,
  TOGGLE_SOUND
} from "./actionTypes";

export const changeSession = type => ({
  type: type ? INC_SESSION : DEC_SESSION,
  payload: type
});

export const changeBreak = type => ({
  type: type ? INC_BREAK : DEC_BREAK,
  payload: type
});

export const resetTimer = () => ({
  type: RESET
});

export const pauseTimer = interval => ({
  type: PAUSE,
  payload: interval
});

export const toggleRunning = timer => ({
  type: TOGGLE_RUNNING,
  payload: timer
});

export const toggleBreak = minutes => ({
  type: TOGGLE_BREAK,
  payload: minutes
});

export const decreaseSeconds = () => ({
  type: DEC_SECS
});

export const decreaseMinutes = () => ({
  type: DEC_MINS
});

export const storeInterval = interval => ({
  type: STORE_INTERVAL,
  payload: interval
});

export const toggleSound = () => ({
  type: TOGGLE_SOUND
});
