import React from "react";
import Countup from "react-countup";
function Counter({ title, number }) {
  return (
    <div className="flex flex-col">
      <Countup
        duration={5}
        end={number}
        className="text-white text-5xl font-bold"
      />
      <span
        className="text-xl font-semibold"
        style={{ color: "var(--text-color)" }}
      >
        {title}
      </span>
    </div>
  );
}

export default Counter;
