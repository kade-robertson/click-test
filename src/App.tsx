import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [eventList, setEventList] = useState<string[]>([]);
  return (
    <div className="App">
      <h1 style={{ fontSize: 72 }}>Click Test</h1>
      <div
        onTouchStart={() => setEventList([...eventList, "touch-start"])}
        onTouchEnd={(evt) => {
          setEventList([...eventList, "touch-end"]);
          console.log(evt);
        }}
        onTouchMove={(evt) => {
          setEventList([...eventList, "touch-move"]);
          console.log(evt);
        }}
        onTouchCancel={() => setEventList([...eventList, "touch-cancel"])}
        onPointerDown={() => setEventList(["pointer-down"])}
        onPointerUp={() => setEventList([...eventList, "pointer-up"])}
        onPointerLeave={() => setEventList([...eventList, "pointer-leave"])}
        onPointerCancel={() => setEventList([...eventList, "pointer-cancel"])}
        onClick={() => setEventList([...eventList, "click"])}
        className="click-target"
        color="red"
      >
        <p className="click-target-text">?</p>
      </div>
      <p style={{ fontSize: 40 }}>Triggered Events</p>
      <ol>
        {eventList.map((event, i) => (
          <li key={i}>{event}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
