import { forwardRef } from 'react'

export const Input = forwardRef(({label, type, id, ...rest}, ref) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <input type={type} id={id} ref={ref} {...rest} />
    </>
  )
})