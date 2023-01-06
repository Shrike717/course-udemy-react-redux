import React from "react";
import { useState } from "react";
import Dropdown from "./components/Dropdown";

const options = [
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
];

function App() {
  const [selected, setSelected] = useState(null);

  const  handleSelect = (option) => {
    setSelected(option);
    console.log(option);
  };

  return(
    <div><Dropdown options={options} selected={selected} onSelect={handleSelect}/></div>
  )
};

export default App;
