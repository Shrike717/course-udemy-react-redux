import React from 'react'

function Table({ data, config }) {
  // Dynamisches Erzeugen der Table Header
  const renderedHeaders = config.map((column) => {
    return(
      <th key={column.label}>{column.label}</th>
    )
  });
  // Dynamisches Erzeugen der Table Rows
  const renderedRows = data.map((fruit) => {
    // Dynamisches Erzeugen der Cells in den Rows
    const renderedCells = config.map((column) => {
      return <td key={column.label} className="p-3">{column.render(fruit)}</td>
    })

    return(
      <tr className='border-b'key={fruit.name}>
        {renderedCells}
      </tr>
    )
  });

  return (
    <table className='table-auto border-spacing-2'>
      <thead>
        <tr className='border-b-2'>{renderedHeaders}</tr>
      </thead>
      <tbody>
        {renderedRows}
      </tbody>
    </table>
  )
}

export default Table
