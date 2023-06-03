import styled from 'styled-components'

const StyledButton = styled.button`
  width: fit-content;
  padding: 9px 18px;
  background: #008cf0;
  color: #ffffff;
  border: 1px solid #008cf0;
  border-radius: 20px;
  cursor: pointer;
  transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out;

  &:focus-visible {
    outline: none;
  }

  &:hover {
    background: #002137;
    border-color: #002137;
    transition: background 0.3s ease-in-out, border-color 0.3s ease-in-out;
  }
`

type IProps = {
  text: string
}

function PrimaryButton({ text }: IProps) {
  return <StyledButton type="button">{text}</StyledButton>
}

export default PrimaryButton
