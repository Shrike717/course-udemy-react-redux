// 1) Import React and ReactDOM Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) We will create a component
function App() {
  const inputType = "number";
  const minValue = 5;

  return <input style={{ border: '3px solid red' }} type={inputType} min={minValue} />
}

// 5) Show the component on the screen
root.render(<App />);
