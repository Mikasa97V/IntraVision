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

const StyledOrderStatus = styled.div`
  width: 5px;
  height: 50px;
  margin-right: 45px;
  background-color: #f75394;
  border: 1px solid #f75394;
  border-radius: 2px;
`
const OrderStatusWrap = styled.div`
  flex: 9%;
`
function TableRow() {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  // localStorage.setItem('isModalOpen', isModalOpen.toString())
  // const modalHandler = () => {
  //   setIsModalOpen(!isModalOpen)
  //   localStorage.setItem('isModalOpen', isModalOpen.toString())
  // }

  return (
    <>
      <StyledRow>
        <StyledOrderStatus />
        <StyledId>50 061</StyledId>
        <StyledRowTitle>
          Просьба оценить разработку рекламного баннера на новорижском шоссе. Форматы 600х500х30...
        </StyledRowTitle>
        <OrderStatusWrap>
          <OrderStatus title="требует уточнения" color="#FD5E53" />
        </OrderStatusWrap>
        <StyledExecutor>Менеджеров Сергей</StyledExecutor>
      </StyledRow>
      {/* {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <OrderModal />
        </Modal>
      )} */}
    </>
  )
}

export default TableRow
