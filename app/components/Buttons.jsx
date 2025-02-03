import React from "react";

function Buttons({ onClick }) {
  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "C",
    "0",
    ".",
    "=",
  ];
  return (
    <div className="flex flex-col justify-center items-centesr">
      <div className="grid grid-cols-4 bg-slate-100 text-black text-3xl m-6 rounded-xl relative">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => onClick(btn)}
            className={`h-12 w-12 transform transition-all hover:scale-125 m-3 border shadow-xl rounded-full ${
              ["AC", "+/-", "%"].includes(btn)
                ? "bg-gray-400"
                : ["+", "-", "x", "/", "="].includes(btn)
                ? "bg-orange-400"
                : btn === "="
                ? "bg-red-500"
                : ""
            }`}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Buttons;
