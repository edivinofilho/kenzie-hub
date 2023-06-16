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

    font-size: clamp(.6rem, 8vw, 1rem);
    font-weight: 500;

    background-color: var(--ColorPrimary);
  }
`

export const StyledIconContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
`
export const StyledLinkContainer = styled.span`
  width: 10%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 0 4px 4px 0;

  background-color: var(--ColorGrey-200);
`