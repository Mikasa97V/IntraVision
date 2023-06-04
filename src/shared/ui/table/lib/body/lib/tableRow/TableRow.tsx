import { TOrderData } from 'redux/orders/ordersReducer'
import { TPriorities } from 'redux/rootReducer'
import styled from 'styled-components'

import OrderStatus from '../orderStatus/OrderStatus'

const StyledRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 2px 0;
  transition: background 0.3s ease-in-out;

  color: #525460;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #eef1f4;
  }

  &:hover {
    background: #ecf3f7;
    transition: background 0.3s ease-in-out;
    cursor: pointer;
  }
`
const StyledId = styled.span`
  flex: 4%;
`

const StyledRowTitle = styled.span`
  width: 100%;
  flex: 29%;
  padding-left: 15px;
`

const StyledExecutor = styled.span`
  flex: 58%;
  padding-left: 15px;
`

const OrderStatusWrap = styled.div`
  flex: 9%;
`
interface IProps {
  data: TOrderData
  priority: TPriorities[]
}

function TableRow({ data, priority }: IProps) {
  const { executorName, id, name, priorityName, statusName, statusRgb } = data
  const color = priority.find((it) => it.name == priorityName)?.rgb
  const StyledOrderStatus = styled.div`
    width: 5px;
    height: 50px;
    margin-right: 45px;
    background-color: ${color};
    border: 1px solid ${color};
    border-radius: 2px;
  `

  return (
    <StyledRow>
      <StyledOrderStatus />
      <StyledId>{id}</StyledId>
      <StyledRowTitle>{name}</StyledRowTitle>
      <OrderStatusWrap>
        <OrderStatus title={statusName} color={statusRgb} />
      </OrderStatusWrap>
      <StyledExecutor>{executorName}</StyledExecutor>
    </StyledRow>
  )
}

export default TableRow
