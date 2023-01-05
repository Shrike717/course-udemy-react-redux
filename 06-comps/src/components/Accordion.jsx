import { useState} from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

const Accordion = ({ items }) =>  {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (clickedIndex) => {
    setExpandedIndex(clickedIndex);
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = <span>
      {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return(
      <div key={item.id}>
        <div onClick={ () => {handleClick(index)} }>
          {icon}
          {item.label}
        </div>
        {isExpanded && <div>{item.content}</div>}
      </div>
    );
  });

  return (
    <div>{renderedItems}</div>
  )
}

export default Accordion;
