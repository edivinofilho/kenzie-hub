import { forwardRef } from 'react'

import { StyledButton } from './styles'

export const Button = forwardRef(({type, text, ...rest}, ref) => {
  return(
    <StyledButton type={type} ref={ref} {...rest}>{text}</StyledButton>
  )}
)
