import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 18px 14px 0 14px;
  width: 218px;
  height: 285px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;

  position: relative;
 
`

export const ProductImage = styled.img`
  padding: 0%;

  max-height: 138px;
`

export const ProductInfo = styled.div`
  padding: 14px 0 12px 0px;
  flex: 1;

  .content-infos-title {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`

export const ProductTitle = styled.h2`
  color: ${({ theme }) => theme.colors.secundary};

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 19px;
`

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.white};

  padding: 0 5px;
  height: 26px;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.black};

  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  margin-left: 5px;
  
`

export const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 16px;
  font-size: 1rem;
  cursor: pointer;
  text-transform: uppercase;
  height: 32px;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0 0 10px 10px;

  > p {
    color: ${({ theme }) => theme.colors.white};

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
   
  }
`
export const ProductDescription = styled.button`
  color: ${({ theme }) => theme.colors.secundary};
  background-color: transparent;
  text-align: left;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
  margin-top: 7px;
  overflow-y: scroll;
  max-height: 35px;
`
