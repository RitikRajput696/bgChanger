import ColorButton from "./ColorButton";

function ColorButtonPanel({ handleClick }) {
  const colorObj = [
    {
      text: "Blue",
      colorValue: "bg-blue-400",
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
    {
      text: "Pink",
      colorValue: "bg-pink-400",
    },
    {
      text: "Emerland",
      colorValue: "bg-emerald-400",
    },
  ];

  return (
    <>
      <div className=" rounded-full flex justify-center items-center flex-col sm:flex-row py-5 px-4 max-w-fit fixed bottom-12 gap-2 border shadow-lg left-1/2 -translate-x-1/2 bg-white ">
        {colorObj.map((obj, i) => {
          return (
            <ColorButton
              key={i}
              buttonBg={obj.colorValue}
              colorName={obj.text}
              onClick={() => {
                // export data to app.jsx
                handleClick(colorObj[i].colorValue);
              }}
            />
          );
        })}
      </div>
    </>
  );
}

export default ColorButtonPanel;
