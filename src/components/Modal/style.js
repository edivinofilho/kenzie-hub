import styled from 'styled-components'

export const StyledModalOverlay = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: fixed;

  inset: 0;

  width: 100%;
  height: 100vh;

  background: rgba(0, 0, 0, 0.4);
`

export const StyledModalBox = styled.div`
  position: relative;
  width: 100%;
  height: 23rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  max-width: 23rem;

  border-radius: 4px;
    
  background: var(--ColorGrey-300);
`

export const StyledModalHeader = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.25rem;

  border-radius: 4px 4px 0 0;

  background-color: var(--ColorGrey-200);

  > button {
    font-size: .8rem;
    color: var(--ColorGrey-100);

    background-color: transparent;
  }
`