import styled from 'styled-components'

export const ContainerDefaultLayout = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  background-color: ${({ theme }) => theme.colors.background};
`
export const ContainerMain = styled.main`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin-left: 95px;
`
