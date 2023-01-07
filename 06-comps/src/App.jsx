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
  };

  return(
    <div className="flex">
      <Dropdown options={options} value={selected} onChange={handleSelect}/>
    </div>
  )
};

export default App;
