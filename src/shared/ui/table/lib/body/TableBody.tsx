import styled from 'styled-components'

import { TableRow } from './lib'

const StyledTableBody = styled.div`
  position: relative;
  padding-left: 3px;
  overflow-y: auto;
  overflow-x: hidden;
  height: calc(100vh - 186px);

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #dae0e7;
    padding: 3px 0;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    padding: 3px 0;
    background: #002137;
    border-radius: 8px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: calc(100% - 3px);
    height: 1px;
    background: #dae0e7;
  }
`

function TableBody() {
  return (
    <StyledTableBody>
      <TableRow />
      <TableRow />
      {/* <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow />
      <TableRow /> */}
    </StyledTableBody>
  )
}

export default TableBody
