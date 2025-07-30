import React from "react";

const Display = ({ text, displayValue }) => {
  console.log("I am from display");

  return (
    <div>
      From Display Component, {text}:{displayValue}
    </div>
  );
};

export default React.memo(Display);
