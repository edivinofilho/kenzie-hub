import { forwardRef } from 'react'

import { StyledSelectContainer, StyledSelect } from './styles'

export const Select = forwardRef(({label, type, ...rest}, ref) => {
  return (
    <StyledSelectContainer>
      {label ? <label>{label}</label> : null} 
      <StyledSelect label={label} ref={ref} {...rest} >
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
          <option value="Quinto Módulo">Quinto Módulo</option>
          <option value="Sexto Módulo">Sexto Módulo</option>
        </StyledSelect>
    </StyledSelectContainer>
  )
})