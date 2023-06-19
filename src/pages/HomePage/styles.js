import styled from 'styled-components'

export const StyledHomeNav = styled.nav`
  width: 100%;
  height: 5.5rem;

  margin: clamp(0, 250px, 2rem) auto;

  border-bottom: .0625rem solid var(--ColorGrey-200);

  @media (max-width: 250px){
    height: 7rem;
  }

  > div {
    width: 90%;
    height: 5.5rem;

    max-width: 55rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    @media (max-width: 250px) {
      height: 7rem;
      padding: 1rem;
      justify-content: center;
    }
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
    flex-wrap: wrap;
    gap: 1rem;

    > h1 {
      font-size: 1.1rem;
      font-weight: 700;
    }

    > p {
      font-size: .8rem;
      font-weight: 600;
      color: var(--ColorGrey-100)
    }

    @media (max-width: 250px) {
      height: 7rem;
      padding: 1rem;
      justify-content: center;
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

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      width: 2rem;
      height: 2rem;
      border-radius: 4px;

      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 1.25rem;
      font-weight: 500;

      transition: .5s;

      background-color: var(--ColorGrey-200);

      &:hover {
        background-color: var(--ColorGrey-300);
      }
    }
  }

  > h2 {
      font-size: clamp(.7rem, 8vw, 1rem);
      font-weight: 700;
    }

  > span {
    font-size: clamp(.7rem, 8vw, 1.1rem);
    font-weight: 400;
  }
`
