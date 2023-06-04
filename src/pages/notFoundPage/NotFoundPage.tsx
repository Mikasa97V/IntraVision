import { redirect } from 'react-router-dom'
import { PrimaryButton } from 'shared/ui/kit'
import styled from 'styled-components'

const StyledLayout = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
  align-items: center;
  padding: 30px 0;
`

const StyledStatusText = styled.h2`
  width: fit-content;
  font-weight: bold;
  font-size: 38px;
  line-height: 43px;
  color: red;
`

const StyledText = styled.h3`
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
`

function NotFoundPage() {
  return (
    <StyledLayout>
      <StyledStatusText>Error 404 :(</StyledStatusText>
      <StyledText>Page not found...</StyledText>
      <PrimaryButton
        text="Go back"
        onClick={() => {
          console.log('redirect')

          redirect('/')
        }}
      />
    </StyledLayout>
  )
}

export default NotFoundPage
