import workInProgress from 'assets/workInProgress.png'
import styled from 'styled-components'

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
`

const StyledTitle = styled.h2``

const StyledImg = styled.img`
  width: 300px;
  height: 300px;
`

function CustomerPage() {
  return (
    <StyledLayout>
      <StyledTitle>Клиенты</StyledTitle>
      <StyledImg src={workInProgress} alt="" />
    </StyledLayout>
  )
}

export default CustomerPage
