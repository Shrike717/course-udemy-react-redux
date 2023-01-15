import React from 'react';
import Table from '../components/Table';

function TablePage() {
  // Array mit Objekten welche in der Tabelle angezeigt werden sollen
  const data = [
    { name: "Orange", color: "bg-orange-500", score: 5 },
    { name: "Apple", color: "bg-red-300", score: 3 },
    { name: "Banana", color: "bg-yellow-500", score: 1 },
    { name: "Lime", color: "bg-green-500", score: 4 },
  ];
  //Array mit Objekten, welche festlegen wieviele Spalten es gibbt und was diese machen
  const config  = [
    { label: "Fruits" ,
      render: (fruit) => fruit.name,
    },
    { label: "Color",
      render: (fruit) => fruit.color,
    },
    { label: "Score",
      render: (fruit) => fruit.score,
    },
  ];
  return (
    <div><Table data={data} config={config}/></div>
  )
};

export default TablePage;
