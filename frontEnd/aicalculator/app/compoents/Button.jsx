import React from "react";

const Button = ({ name, event, eraseMode, disabled, eraserWidth }) => {

 
  
  return (
    <>
      <button
        className={`px-4 py-1 z-10 ${
          eraseMode ? "bg-green-900 " : ""
        }  text-2xl relative border hover:bg-green-900 transition ease-in delay-150`}
        onClick={event}
        disabled={disabled}
        value={eraserWidth}
      >
        {name}{" "}
      </button>
    </>
  );
};

export default Button;
