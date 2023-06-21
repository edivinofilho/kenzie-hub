import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 100%;

  padding: 1rem;
  border-radius: 4px;

  font-size: clamp(.6rem, 5vw, 1rem);
  font-weight: 500;

  background-color: var(--ColorPrimary);

  transition: .5s;

  &:hover {
  background-color: var(--ColorHover);
}
`