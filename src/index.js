import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";

function Clock(props) {
  const [time, setTime] = useState();
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, props.interval);
    return () => {
      clearInterval(timer);
    };
  });
  //console.log(time);
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {time}.</h2>
    </div>
  );
}
function MultipleClock(props) {
  return (
    <div>
      <Clock interval={1000} />
      <Clock interval={2000} />
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<MultipleClock />);
