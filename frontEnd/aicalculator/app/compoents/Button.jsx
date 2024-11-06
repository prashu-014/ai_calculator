import React from "react";

const Button = ({ name, event, eraseMode, disabled, eraserWidth }) => {

 
  
  return (
    <>
      <button
        className={`px-4 py-1 z-10 border border-zinc-700  ${
          eraseMode ? "bg-zinc-700" : ""
        }  text-2xl relative  hover:bg-zinc-700 transition ease-in delay-150`}
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
