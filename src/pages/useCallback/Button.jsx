import React from "react";

const Button = ({ content, handleClick }) => {
  console.log("I am from button", content);

  return (
    <button onClick={handleClick} className="bg-green-200">
      {content}
    </button>
  );
};

export default React.memo(Button);
