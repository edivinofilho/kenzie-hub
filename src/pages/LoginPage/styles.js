import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledFormContainer = styled.main`
  max-width: 23rem;
  height: 32rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  gap: 20px;

  padding: 1.4rem;
  margin: .8rem;

  background-color: var(--ColorGrey-300);

  > h1 {
    font-size: 1.rem;
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
  font-size: 1rem;
  font-weight: 500;
  color: var(--ColorGrey-000);

  border-radius: 4px;


`