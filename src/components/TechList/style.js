import styled from 'styled-components'

export const StyledTechList = styled.ul`
  width: 100%;
  height: auto;

  min-height: 23rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 4px;

  padding: clamp(.5rem, 5vw, 2rem) 0 0;


  background-color: var(--ColorGrey-300);
`