import styled from 'styled-components'

export const StyledSelectContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > label {
    font-size: .8rem;
  }
`

export const StyledSelect = styled.select`
  width: 100%;
  height: 3rem;

  border-radius: 4px;
  background-color: var(--ColorGrey-200);

  padding: 0.5rem 1rem;

  font-size: clamp(.6rem, 5vw, 1rem);
  font-weight: 400;
  color: var(--ColorGrey-100);
`