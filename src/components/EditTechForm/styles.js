import styled from 'styled-components'

export const StyledEditTechForm = styled.form`
  width: 87%;
  height: 76%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  margin-top: 9.6px;

  .notAble {
    cursor: not-allowed;
  }
`

export const StyledButtonContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .saveButton {
    width: 12.75rem;
    height: 3rem;

    border-radius: 4px;
    background-color: var(--ColorPrimaryDisable);
  }

  .excludeButton {
    width: 6.125rem;
    height: 3rem;

    border-radius: 4px;
    background-color: var(--ColorGrey-100);
  }

  
`