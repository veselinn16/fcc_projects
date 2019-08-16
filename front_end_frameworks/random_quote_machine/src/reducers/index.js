import { NEW_ACTION } from "../actions/actionNames";
import { quotes } from "../data/quotes";

const randomQuote = quotes[Math.round(Math.random() * quotes.length - 1)];

// Reducer handling the quote generation
export const quoteReducer = (state = randomQuote, action) => {
  switch (action.type) {
    case NEW_ACTION:
      return action.payload;
    default:
      return state;
  }
};
