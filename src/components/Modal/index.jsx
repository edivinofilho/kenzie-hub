import { useRef, useEffect } from 'react'

import { StyledModalOverlay, StyledModalBox, StyledModalHeader } from './style'

export const Modal = ({ children, title, setModalState}) => {
  const modalRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect (() => {
    const handleOutClick = (event) => {
      if(!modalRef.current?.contains(event.target)){
        setModalState(false)
      }
    }

    window.addEventListener('mousedown', handleOutClick)

    return () => {
    window.removeEventListener('mousedown', handleOutClick)

    }
  }, [])

  useEffect (() => {
    const handleKeyDown = (event) => {
      if(event.key === 'Escape'){
        buttonRef.current?.click()
        setModalState(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
    window.removeEventListener('keydown', handleKeyDown)

    }
  }, [])

  return(
    <StyledModalOverlay role="dialog">
      <StyledModalBox ref={modalRef}>
        <StyledModalHeader>
          <p>{title}</p>
          <button onClick={()=> setModalState()}>X</button>
        </StyledModalHeader>
        { children } 
      </StyledModalBox>
    </StyledModalOverlay>
  )
}