import React from "react";
import Button from "./Button";

function App() {
  return(
    <div>
      <div>
        <Button primary>Click Me!</Button>
      </div>
      <div>
        <Button secondary>By Now!</Button>
      </div>
      <div>
        <Button success>See Deal!</Button>
      </div>
      <div>
        <Button warning>Hide Ads!</Button>
      </div>
      <div>
        <Button danger>Delete!</Button>
      </div>
    </div>
  )
};

export default App;
