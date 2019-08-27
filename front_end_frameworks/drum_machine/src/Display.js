import React, { useEffect } from 'react';

const Display = ({ activeString }) => {
  return (
    <div className="display-container">
      <h1 id="display" className="pressed-key">
        {activeString}
      </h1>
    </div>
  );
};

export default Display;
