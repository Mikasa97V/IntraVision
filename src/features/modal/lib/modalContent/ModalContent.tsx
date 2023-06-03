import styled from 'styled-components'

const StyledModalContent = styled.div`
  width: 975px;
  height: calc(100vh - 125px);

  background: #ecf3f7;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
`

function ModalContent(children: any) {
  return <StyledModalContent>{children.children}</StyledModalContent>
}

export default ModalContent
