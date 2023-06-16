import styled from 'styled-components'

export const StyledRegisterForm = styled.form`
  width: 90%;
  height: 58%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1.5rem;

  padding-top: 1rem;

  
  > button {
    transition: 0.5s;
    width: 100%;

    padding: 1rem;
    border-radius: 4px;

    font-size: clamp(.7rem, 8vw, 1rem);
    font-weight: 500;
   
    &.active {
      background-color: var(--ColorPrimary);
      cursor: pointer;

      &:hover {
        background-color: var(--ColorHover);
      }
    }

    &:not(.active) {
      background-color: var(--ColorPrimaryDisable);
      cursor: not-allowed;
    }
  }
`
export const StyledErrorMsg = styled.p`
  font-size: .8rem;
  color: var(--ColorPrimary);
  line-height: 1.5;
`