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

  /* background-color: red; */

  > button {
    width: 100%;

    padding: 1rem;
    border-radius: 4px;

    font-size: 1rem;
    font-weight: 500;

    background-color: var(--ColorPrimary);
    cursor: pointer;
    
  }
  
  > button.active {
    background-color: var(--ColorPrimaryDisable);
    cursor: not-allowed;

  }
`
export const StyledErrorMsg = styled.p`
  font-size: .8rem;
  color: var(--ColorPrimary);
  line-height: 1.5;
`