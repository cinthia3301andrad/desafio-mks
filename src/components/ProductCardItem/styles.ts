import styled from 'styled-components'

export const ProductCardItemContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 10px 10px;
  max-width: 379px;
  height: 95px;
  width: 100%;

`

export const ProductImage = styled.img`
  width: 20%;
`

export const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 14px 0 12px 0px;
  flex: 1;

  .content-infos-title {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    justify-content: space-between;
  }
`

export const ProductTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secundary};

  font-size: 1.5rem;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
  width: 43%;
  margin-left: 7px;
`

export const ProductPrice = styled.div`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 17px;
  margin: 0;
  margin-left: 5px;
`

export const ButtonsAddDel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 8px;
  border-radius: 4px;
  border: 0.3px solid #bfbfbf;
  background: #fff;
  height: 25px;
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    margin: 0 6px;
    padding: 0 6px;
    border-left: 1px solid #bfbfbf;
    border-right: 1px solid #bfbfbf;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
