import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledRegisterHeader = styled.header`
  width: 90%;
  height: 8rem;

  max-width: 23rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  gap: 1rem;

  margin: 0 auto;

  padding: 2rem 0;

  @media (max-width: 262px) {
    justify-content: center;
  }
`

export const StyledRegisterFormContainer = styled.main`
  width: 90%;
  height: auto;
  max-width: 23rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 2.2rem .2rem;
  margin: .7rem auto;

  border-radius: 4px;

  background-color: var(--ColorGrey-300);

  > h1 {
    font-size: 1.1rem;
  }

  > p {
    color: var(--ColorGrey-100);
    font-size: .8rem;
  }
`

export const StyledButton = styled(Link)`
  width: 5rem;
  height: 2.5rem;

  padding: 0rem .6rem 0rem .6rem;

  background-color: var(--ColorGrey-300);

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-size: clamp(.7rem, 8vw, .8rem);
  font-weight: 600;
  color: var(--ColorGrey-000);

  border-radius: 4px;


`