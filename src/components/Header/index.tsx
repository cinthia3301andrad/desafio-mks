import IconCart from '@/icons/IconCart'
import { FiMoon, FiSun } from 'react-icons/fi'
import { theme } from '@/styles/theme'
import { useCart } from '@/context/CartContext'

import * as S from './styles'
import { useTheme } from '@/context/ThemeContext'

export function Header() {
  const { items, openMenu } = useCart()
  const { toggleTheme , theme: currentTheme} = useTheme()

  return (
    <S.ContainerHeader>
      <S.ContentLeft>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </S.ContentLeft>
      <S.ContentRight>
        <S.ButtonCart onClick={openMenu} >
          <IconCart color={theme.colors.blackAll} />
          <p>{items?.length}</p>
        </S.ButtonCart>
        <S.ButtonToggleTheme onClick={() => toggleTheme()}>
          {currentTheme === 'light' ? 
           <FiSun size={15}/>
          : <FiMoon size={15}  color={theme.colors.white} /> }
         
         
        </S.ButtonToggleTheme>
      </S.ContentRight>
    </S.ContainerHeader>
  )
}
