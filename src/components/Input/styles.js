import styled from 'styled-components'

export const StyledInput = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    height: 3rem;

    padding: 0.5rem 1rem;

    font-size: 1rem;
    font-weight: 400;
    color: var(--ColorGrey-000);

    background-color: var(--ColorGrey-200);
    border-radius: 4px;
  }

  input:focus {
    border: 2px solid var(--ColorGrey-000);
  }

  > label {
    font-size: .8rem;
  }
`