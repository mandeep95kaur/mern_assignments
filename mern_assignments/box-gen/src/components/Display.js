import React from 'react';

const Display = (props) => {
  // using the getter that were passed from my parent (App.js) component
  const { boxColorArray } = props;
  return (
    <div>
      {
        boxColorArray.map((color, index) => (
          <div key={index} style={{ 
              display: "inline-block",
              margin: "10px",
              height: "50px", 
              width: "50px", 
              backgroundColor: color
              }}>
          </div>
        ))
      }
    </div>
  );
}

export default Display;
