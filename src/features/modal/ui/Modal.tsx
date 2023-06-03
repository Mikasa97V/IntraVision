import Close from 'assets/close.png'
import { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

import { ModalContent } from '../lib'

interface IModalProps {
  onClose?: () => void
  children: any
}

const StyledModalHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 975px;
  height: 60px;
  padding: 22px 31px 22px 36px;

  color: #fff;
  background: #1a4876;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.25);
`
const StyledCloseBtn = styled.div`
  cursor: pointer;
`

function Modal(props: IModalProps) {
  const node = document.getElementById('modal')
  if (!node) return null
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClose(e: MouseEvent) {
      if (e.target instanceof Node && ref.current?.contains(e.target)) {
        props.onClose?.()
      }
    }

    document.addEventListener('click', handleClose)

    return () => {
      document.removeEventListener('click', handleClose)
    }
  }, [])

  return ReactDOM.createPortal(
    <>
      <StyledModalHead>
        <div>Новая заявка</div>
        <StyledCloseBtn ref={ref}>
          <img src={Close} alt="" />
        </StyledCloseBtn>
      </StyledModalHead>
      <ModalContent>{props.children}</ModalContent>
    </>,
    node,
  )
}

export default Modal
