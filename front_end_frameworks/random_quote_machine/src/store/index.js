import { createStore } from "redux";
import { quoteReducer } from "../reducers";

// Redux store initialization
export const store = createStore(quoteReducer);
