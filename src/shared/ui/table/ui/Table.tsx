import styled from 'styled-components'

import { TableBody } from '../lib'
import TableHeader from '../lib/header/TableHeader'

const StyledLayout = styled.div`
  margin-top: 18px;
`

function Table() {
  return (
    <StyledLayout>
      <TableHeader />
      <TableBody />
    </StyledLayout>
  )
}

export default Table
