import React from "react";

function display({ total }) {
  return (
    <div
      className="display h-16 bg-slate-100 text-black text-3xl mt-6 mx-6 rounded-xl relative"
      style={{ position: "relative" }}
    >
      <span
        style={{
          position: "absolute",
          bottom: "0",
          right: "10px",
        }}
      >
        {total}
      </span>
    </div>
  );
}

export default display;
