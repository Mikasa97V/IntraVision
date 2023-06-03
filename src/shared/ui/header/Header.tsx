import search from 'assets/search.png'
import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  height: 65px;
  padding: 15px 20px 10px;

  background-color: #d1e0ed;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.2);
`
const InputWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: 680px;
  height: 100%;
`

const InputImg = styled.img`
  position: absolute;
  top: 10px;
  right: 13px;
  cursor: pointer;
`

const InputElement = styled.input`
  width: 100%;
  height: 100%;
  padding: 5px 40px 5px 13px;

  background: #ffffff;
  border: 1px solid #42aaff;
  border-radius: 20px;
  box-shadow: 0 0 7px rgba(0, 140, 240, 0.15), inset -1px 0px 7px rgba(0, 0, 0, 0.11);

  &:focus-visible {
    outline: none;
    border: none;
  }
`

const Header = () => (
  <StyledHeader>
    <InputWrap>
      <InputImg src={search} alt="search" />
      <InputElement type="text" />
    </InputWrap>
  </StyledHeader>
)

export default Header
