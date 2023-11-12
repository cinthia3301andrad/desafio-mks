import styled, { css } from 'styled-components'

export const ContainerMenuRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  height: 100px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 10px 65px;

  ${({ theme }) => css`
    ${theme.breakpoints.sm} {
      max-height: 190px;
      padding: 10px 30px;
      height: 70px;
    }
  `}
`