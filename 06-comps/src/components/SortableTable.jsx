import React from 'react'
import Table from './Table';
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import useSort from '../hooks/use-sort';

function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, setSortColumn, sortedData } = useSort(data, config);

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }

    return {
      ...column,
      header: () =>
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}>

          <div className='flex items-center'>
            <div className='mr-2'>
              {getIcons(column.label, sortBy, sortOrder)}
            </div>
            {column.label}
          </div>
        </th>
    }
  });

  return (
    <Table {...props} data={sortedData} config={updatedConfig}/>
  )
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy || sortOrder === null) {
    return <div>
      <GoTriangleUp />
      <GoTriangleDown />
    </div>
  } else if (sortOrder === "asc") {
    return <div>
    <GoTriangleUp />
  </div>
  } else {
    return <div>
    <GoTriangleDown />
  </div>
  }
};

export default SortableTable;
