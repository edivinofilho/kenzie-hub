import { useState } from 'react'
import { StyledTechItem } from './style'

export const TechItem = () => {
  return (
    <StyledTechItem>
      <p>Nome Tech</p>
      <span>tech nível</span>
    </StyledTechItem>
  )
}