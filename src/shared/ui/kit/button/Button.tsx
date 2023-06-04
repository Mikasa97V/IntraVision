import { Modal } from 'features'
import { NewModal } from 'features/modal/lib'
import { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
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

type IButtonProps = {
  text: string
}

function Button({ text }: IButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <StyledButton type="button" onClick={() => setIsModalOpen(true)}>
        {text}
      </StyledButton>
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <NewModal />
        </Modal>
      )}
    </>
  )
}

export default Button
