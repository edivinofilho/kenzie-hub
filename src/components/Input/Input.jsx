import { forwardRef } from 'react'

import { StyledInput } from './styles'

export const Input = forwardRef(({label, type, ...rest}, ref) => {
  return (
    <StyledInput>
      {label ? <label>{label}</label> : null} 
      <input type={type} ref={ref} {...rest} />
    </StyledInput>
  )
})