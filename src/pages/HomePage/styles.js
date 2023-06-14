import styled from 'styled-components'

export const StyledHomeNav = styled.nav`
  width: 100%;
  height: 5.5rem;

  margin: 0 auto;

  border-bottom: .0625rem solid var(--ColorGrey-200);

  > div {
    width: 90%;
    height: 5.5rem;

    max-width: 55rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const StyledHomeHeader = styled.nav`
  width: 100%;
  height: 7.5rem;

  margin: 0 auto;

  border-bottom: .0625rem solid var(--ColorGrey-200);

  > div {
    width: 90%;
    height: 7.5rem;

    max-width: 55rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1 {
      font-size: 17.6px;
      font-weight: 700;
    }

    > p {
      font-size: .8rem;
      font-weight: 600;
      color: var(--ColorGrey-100)
    }
  }
` 
export const StyledMain = styled.main`
  width: 90%;
 
  max-width: 55rem;

  margin: 3rem auto;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  > h1 {
      font-size: 1.1rem;
      font-weight: 700;
    }

  > p {
    font-size: 1rem;
    font-weight: 400;
  }
`
