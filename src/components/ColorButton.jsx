import React from "react";

function ColorButton({ colorName = "white", buttonBg = "white", onClick }) {
  return (
    <button
      className={
        "border-gray-400 border px-4 py-2 text-xl rounded-full shadow-md hover:scale-105 transition-all " +
        buttonBg
      }
      onClick={onClick}
    >
      {colorName}
    </button>
  );
}

export default ColorButton;
