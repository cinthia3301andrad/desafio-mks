import styled from 'styled-components'

export const ContainerMenuRight = styled.div<{ isOpenMenu: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  max-width: 425px;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  transform: ${(props) =>
    props.isOpenMenu ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;

  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  padding: 20px;

  > h1 {
    color: ${({ theme }) => theme.colors.white};

    font-size: 2.7rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 10px;
  }
`

export const CartButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  z-index: 1100;
`

export const CloseButton = styled.button`
  position: absolute;
  cursor: pointer;
  top: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.blackAll};
  color: ${({ theme }) => theme.colors.white};
`
export const MenuItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
`
export const ContentListProducts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 50px;
  padding-top: 10px;
  overflow-y: scroll;
  height: 65%;
  padding-bottom: 10px;
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${({ theme }) => theme.colors.blackAll};
margin-top: 20px;
  > p {
    color: ${({ theme }) => theme.colors.white};
    margin: 0;
    font-size: 2.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: 15px;
  }
`
export const ContentTotal = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  font-size: 2.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; 
  margin-top: 10px;
 
  
`
