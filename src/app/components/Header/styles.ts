import styled, { css } from 'styled-components'

export const ContainerHeader = styled.div`
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
    }
  `}
`
export const ContentLeft = styled.div`
  display: flex;
  > h1 {
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.white};
  }
  > p {
    margin: 5px 0 0 5px;
    color: ${({ theme }) => theme.colors.white};

    font-size: 2rem;
    font-style: normal;
    font-weight: 300;
    line-height: 19px;
  }
`
export const ContentRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ButtonCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: none;
  border: none;
  cursor: pointer;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};

  width: 90px;
  height: 45px;

  svg {
    margin-right: 5px;
  }

  > p {
    margin: 0;
    color: ${({ theme }) => theme.colors.black};

    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`
