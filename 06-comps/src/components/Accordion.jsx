import { useState} from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) =>  {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Normales Update des PoS:
  // const handleClick = (clickedIndex) => {
  //   if (expandedIndex === clickedIndex) {
  //     setExpandedIndex(-1);
  //   } else {
  //     setExpandedIndex(clickedIndex);
  //   }
  // }

  // Funktionales Update des Pos:
  const handleClick = (clickedIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
    if (currentExpandedIndex === clickedIndex) {
        return -1
      } else {
        return clickedIndex;
      }
    })
  }


  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span className="mr-4 text-2xl">
      {isExpanded ? <GoChevronDown /> :  <GoChevronLeft />}
    </span>

    return(
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer" onClick={ () => {handleClick(index)} }>
          {item.label}
          {icon}
        </div>
        {isExpanded && <div  className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return (
    <div className="border-x border-t rounded">{renderedItems}</div>
  )
}

export default Accordion;
