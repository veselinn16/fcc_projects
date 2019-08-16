import { NEW_ACTION } from "./actionNames";
import { quotes } from "../data/quotes";

// Action creator for generating quotes
export const generateQuote = () => {
  return {
    type: NEW_ACTION,
    payload: quotes[Math.round(Math.random() * quotes.length - 1)]
  };
};
