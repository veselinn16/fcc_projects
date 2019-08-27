import React, { useEffect } from "react";
import marked from "marked";

const Output = ({ text }) => {
  useEffect(() => {
    document.querySelector("#preview").innerHTML = marked(text, {
      breaks: true
    });
  });

  return (
    <div className="preview-container">
      <div id="preview">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Output;
