import React from "react";
import Link from "./components/Link";
import Route from "./components/Route";
import AccordionPage from "./pages/AccordionPage"
import DropdownPage from "./pages/DropdownPage";


function App() {
  return(
    <div>
      <Link to={"/accordion"}>Go to Accordion Page</Link>
      <Link to={"/dropdown"}>Go to Dropdown Page</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  )
};

export default App;
