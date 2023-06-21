import { useState } from 'react'
import { StyledTechItem } from './style'

export const TechItem = ({ children, onClick }) => {
  return (
    <StyledTechItem onClick={onClick}>
      { children }
    </StyledTechItem>
  )
}