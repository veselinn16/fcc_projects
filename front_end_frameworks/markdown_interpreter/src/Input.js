import React from "react";

const Input = ({ text, handleChange }) => {
  return (
    <div className="input-container">
      <div className="input-header">
        <div className="input-header-partition">
          {/* <i className="input-header-icon fas fa fa-arrows-alt" /> */}
          <h2 className="input-header-heading">editor</h2>
        </div>
        <i className="input-header-icon fa fa-arrows-alt" />
      </div>
      <textarea
        spellCheck="false"
        className="input"
        onChange={handleChange}
        id="editor"
        value={text}
        onKeyDown={handleChange}
      />
    </div>
  );
};

export default Input;
