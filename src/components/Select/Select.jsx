import { forwardRef } from 'react'

import { StyledSelectContainer, StyledSelect } from './styles'

export const Select = forwardRef(({label, type, children, ...rest}, ref) => {
  return (
    <StyledSelectContainer>
      {label ? <label>{label}</label> : null} 
      <StyledSelect label={label} ref={ref} {...rest} >
          { children }
        </StyledSelect>
    </StyledSelectContainer>
  )
})