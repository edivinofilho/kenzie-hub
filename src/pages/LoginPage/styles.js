import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 2rem;
`

export const StyledImg = styled.img`
  width: 8rem;
` 

export const StyledFormContainer = styled.main`
  width: 90%;
  height: 32rem;
  max-width: 23rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 2.2rem 1.4rem;
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

export const StyledLink = styled(Link)`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--ColorGrey-100);

  text-decoration: none;
  font-size: clamp(.7rem, 5vw, 1rem);

  font-weight: 500;
  color: var(--ColorGrey-000);

  border-radius: 4px;

  transition: .5s;
  
  &:hover {
    background-color: var(--ColorGrey-200);
  }
`