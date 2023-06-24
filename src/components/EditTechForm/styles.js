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
    width: 62%;
    height: 3rem;

    font-size: clamp(.6rem, 5vw, 1rem);

    border-radius: 4px;
    background-color: var(--ColorPrimaryDisable);

    cursor: not-allowed;

    &.enabled {
      cursor: pointer;
      background-color: var(--ColorPrimary);
    }
  }

  .excludeButton {
    width: 32%;
    height: 3rem;

    font-size: clamp(.6rem, 5vw, 1rem);

    border-radius: 4px;
    background-color: var(--ColorGrey-100);
  }
`