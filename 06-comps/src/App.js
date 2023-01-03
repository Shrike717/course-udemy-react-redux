import React from "react";
import Button from "./Button";

function App() {
  return(
    <div>
      <div>
        <Button primary rounded outline>Click Me!</Button>
      </div>
      <div>
        <Button secondary>By Now!</Button>
      </div>
      <div>
        <Button success outline>See Deal!</Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger rounded  outline>Delete!</Button>
      </div>
    </div>
  )
};

export default App;
