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

function OrderModal() {
  return (
    <StyledLayout>
      <StyledLeftWrap>
        <StyledDescriptionWrap>
          <StyledDescriptionTitle>Описание</StyledDescriptionTitle>
          <StyledDescriptionText>
            Длительное время занимает сохранение продажи (вне зависимости от кол-ва добавленных товаров). Проверить,
            почему занимает столько времени. Это третья строка Это третья строкаЭто третья строкаЭто третья строкаЭто
            третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья строкаЭто третья
            строка третья строка тья строка тья строка конец!
          </StyledDescriptionText>
        </StyledDescriptionWrap>
      </StyledLeftWrap>
      <StyledBreak></StyledBreak>
      <StyledRightWrap>right</StyledRightWrap>
    </StyledLayout>
  )
}

export default OrderModal
