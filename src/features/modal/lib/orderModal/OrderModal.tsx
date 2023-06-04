import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getOrder } from 'redux/orders/ordersAction'
import { TRootState } from 'redux/rootReducer'
import styled from 'styled-components'

const StyledLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const StyledBreak = styled.div`
  width: 1px;
  height: 100%;
  background: #d7dce0; ;
`

const StyledLeftWrap = styled.div`
  width: 100%;
  max-width: 735px;
  padding: 28px 38px;
`

const StyledRightWrap = styled.div`
  padding: 28px;
`
const StyledDescriptionWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

const StyledDescriptionTitle = styled.span`
  color: #9f9ea7;
`
const StyledDescriptionText = styled.span`
  color: #060606;
`

interface IProps {
  currentOrder: any
  orderId: number
  getOrder: (id: number) => void
}

function OrderModal({ currentOrder, getOrder, orderId }: IProps) {
  useEffect(() => {
    getOrder(orderId)
  }, [orderId])

  return (
    <StyledLayout>
      <StyledLeftWrap>
        <StyledDescriptionWrap>
          <StyledDescriptionTitle>Описание</StyledDescriptionTitle>
          <StyledDescriptionText dangerouslySetInnerHTML={{ __html: currentOrder?.description }} />
        </StyledDescriptionWrap>
      </StyledLeftWrap>
      <StyledBreak></StyledBreak>
      <StyledRightWrap>right</StyledRightWrap>
    </StyledLayout>
  )
}

const mapStateToProps = (state: TRootState) => ({
  currentOrder: state.ordersList.currentOrder,
})

const mapDispatchToProps = (dispatch: any) => ({
  getOrder: bindActionCreators(getOrder, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderModal)
