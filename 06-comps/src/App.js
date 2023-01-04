import React from "react";
import Accordion from "./components/Accordion";

function App() {
  const items =[
    {
      label: "Can i use React on a project?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo distinctio quae est quod aliquid cupiditate odit facilis, omnis facere!",
    },
    {
      label: "Can i use JavaScript on a project?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo distinctio quae est quod aliquid cupiditate odit facilis, omnis facere!",
    },
    {
      label: "Can i use CSS on a project?",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quo distinctio quae est quod aliquid cupiditate odit facilis, omnis facere!",
    },
  ]
  return <Accordion items={items}/>
};

export default App;
