import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 100%;
  height: 58%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  padding-top: 1.5rem;

  > button {
    width: 100%;

    padding: 1rem;
    border-radius: 4px;

    font-size: 1rem;
    font-weight: 500;

    background-color: var(--ColorPrimary);
  }
`