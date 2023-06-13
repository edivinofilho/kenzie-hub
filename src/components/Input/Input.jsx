import { forwardRef } from 'react'

import { StyledInput } from './styles'

export const Input = forwardRef(({label, type, id, ...rest}, ref) => {
  return (
    <StyledInput>
      {label ? <label>{label}</label> : null}
      <input type={type} id={id} ref={ref} {...rest} />
    </StyledInput>
  )
})