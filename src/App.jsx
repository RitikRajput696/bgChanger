import { useState } from "react";
import ColorButtonPanel from "./components/ColorButtonPanel";

export default function App() {
  const [color, setColor] = useState("bg-white");
  function handleClick(data) {
    setColor(data);
  }
  return (
    <div>
      <div className={"flex justify-center items-center h-screen " + color}>
        <ColorButtonPanel handleClick={handleClick} />
      </div>
    </div>
  );
}
