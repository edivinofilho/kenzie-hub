import { forwardRef } from 'react'

export const Select = forwardRef(({ label, id, options, ...rest }, ref) => {
  return (
    <>
      {label ? <label>{label}</label> : null}
      <select id={id} ref={ref} {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
})