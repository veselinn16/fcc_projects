import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Input from "./Input";
import Output from "./Output";
import Footer from "./Footer";

import initialText from "./initialText";

function App() {
  // local state for controlled component
  const [text, updateText] = useState(initialText);

  // event handler for change in textarea
  const handleChange = e => {
    updateText(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <div className="md-app">
        <Input text={text} handleChange={handleChange} />
        <Output text={text} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
