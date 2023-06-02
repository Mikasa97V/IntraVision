import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 9px 18px;
  background: #008CF0;
  color: #FFFFFF;
  border: 1px solid #008CF0;
  border-radius: 20px;
  cursor: pointer;
  
  &:focus-visible {
    outline: none;
  }
`

type IButtonProps = {
  text: string,
}

const Button = ({text}: IButtonProps) => {
  return (
    <StyledButton type='button'>{text}</StyledButton>
  )
}

export default Button;
