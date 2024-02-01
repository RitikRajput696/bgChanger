import { useState } from "react";
import ColorButton from "./ColorButton";

function ColorButtonPanel() {
  const [color, setColor] = useState("bg-white");

  const colorObj = [
    {
      text: "Blue",
      colorValue: "bg-blue-500",
    },
    {
      text: "Teal",
      colorValue: "bg-teal-400",
    },
    {
      text: "Rose",
      colorValue: "bg-rose-300",
    },
    {
      text: "fuchsia",
      colorValue: "bg-fuchsia-500",
    },
  ];

  return (
    <>
      <div
        className={"flex justify-center items-center h-screen " + color}
      ></div>
      <div className=" rounded-full flex justify-center py-5 px-4 max-w-fit fixed bottom-12 gap-2 border shadow-lg left-1/2 -translate-x-1/2 bg-white">
        {colorObj.map((obj, i) => {
          return (
            <ColorButton
              key={i}
              buttonBg={obj.colorValue}
              colorName={obj.text}
              onClick={() => setColor(colorObj[i].colorValue)}
            />
          );
        })}
      </div>
    </>
  );
}

export default ColorButtonPanel;
