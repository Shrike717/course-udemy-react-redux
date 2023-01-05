import React from "react";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

function App() {
  // const [selected, setSelected] = useState(null);

  return(
    <div><Dropdown options={options} /></div>
  )
};

export default App;
