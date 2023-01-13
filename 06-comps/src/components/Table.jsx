import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers'
import React from 'react'

function Table({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Fruits</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>

      </tbody>
    </table>
  )
}

export default Table
