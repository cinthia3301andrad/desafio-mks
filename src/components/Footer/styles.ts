import styled  from 'styled-components'

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 34px;
  background-color: ${({ theme }) => theme.colors.backgroundPlus};
  padding: 10px 65px;

  > p {
    color: ${({ theme }) => theme.colors.blackAll};

    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
