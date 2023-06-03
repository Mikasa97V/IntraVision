import styled from 'styled-components'

interface IOrderStatusProps {
  title: string
  color: string
}

function OrderStatus({ color, title }: IOrderStatusProps) {
  const StyledOrderStatus = styled.div`
    width: fit-content;
    max-width: 117px;
    padding: 8px 16px;
    margin-left: 15px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    color: #fff;
    border: 1px solid;
    border-radius: 50px;
    background-color: ${color};
  `
  return <StyledOrderStatus>{title}</StyledOrderStatus>
}

export default OrderStatus
