import styled from 'styled-components'

const StyledTableHead = styled.div`
  position: relative;
  display: flex;
  padding-left: 52px;
  /* padding-left: 3px; */

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: calc(100% - 3px);
    height: 1px;
    background: #dae0e7;
  } */
`

const StyledTableTitle = styled.div`
  position: relative;
  padding: 10px 0 10px 15px;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    width: 2px;
    height: 22px;
    background: #e2e7ea;
  }

  &:first-child {
    padding-left: 0;
  }

  &.title {
    flex: 29%;
  }

  &.orderId {
    /* padding-left: 49px; */
    flex: 4%;
  }

  &.status {
    flex: 9%;
  }

  &.executor {
    flex: 58%;
  }
`
function TableHeader() {
  return (
    <StyledTableHead>
      <StyledTableTitle className="orderId">ID</StyledTableTitle>
      <StyledTableTitle className="title">Название</StyledTableTitle>
      <StyledTableTitle className="status">Статус</StyledTableTitle>
      <StyledTableTitle className="executor">Исполнитель</StyledTableTitle>
    </StyledTableHead>
  )
}

export default TableHeader
