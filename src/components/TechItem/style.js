import styled from 'styled-components'

export const StyledTechItem = styled.li`
  width: 92%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 13px 22px;

  border-radius: 4px;

  background-color: var(--ColorGrey-400);

  transition: .5s;

  cursor: pointer;

  > p {

    font-weight: 700;
  }

  > span {
    color: var(--ColorGrey-100);
    transition: 0.5s;
  }

  &:hover {
    background-color: var(--ColorGrey-200);

    > span {
      color: var(--ColorGrey-000)
    }
  }
`