import React, { useEffect } from "react";
import "./App.css";

import { generateQuote } from "./actions/actionCreator";

import { connect } from "react-redux";

const App = props => {
  useEffect(() => {
    // put text and author of quote in HTML
    document.getElementById("text").innerText = `${String.fromCharCode(39)} ${
      props.quote.text
    }`;
    document.getElementById("author").innerText = `-  ${props.quote.author}`;
  });

  return (
    <div className="App">
      <div id="quote-box">
        <h1 id="text">Loading Quote...</h1>
        <p id="author">Loading Quote Author...</p>
        <div id="buttons-container">
          <button
            className="button"
            id="new-quote"
            onClick={props.generateQuote}
          >
            New Quote
          </button>
          <a
            href="twitter.com/intent/tweet"
            className="button"
            id="tweet-quote"
          >
            Tweet
          </a>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  quote: state
});

const mapDispatchToProps = dispatch => ({
  generateQuote: () => dispatch(generateQuote())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
