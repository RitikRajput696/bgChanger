import React from "react";

function ColorButton({ colorName = "white", buttonBg = "white", onClick }) {
  return (
    <button
      className={
        "border-black border px-4 py-2 text-xl rounded-full " + buttonBg
      }
      onClick={onClick}
    >
      {colorName}
    </button>
  );
}

export default ColorButton;
