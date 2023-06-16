import styled from 'styled-components'

export const StyledInput = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    height: 3rem;

    padding: 0.5rem 1rem;

    font-size: clamp(.7rem, 8vw, 1rem);
    font-weight: 400;
    color: var(--ColorGrey-000);

    background-color: var(--ColorGrey-200);
    /* border-radius: ${({borderRadius}) => borderRadius ? borderRadius : '4px'} */
  }

  input:focus {
    border: 2px solid var(--ColorGrey-000);
    background-color: var(--ColorGrey-200);

  }

  > label {
    font-size: .8rem;
  }
`