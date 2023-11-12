import { useState } from 'react';

import * as S from './styles';
import IconCart from '@/icons/IconCart';
import theme from '@/styles/theme';

export function Header() {
  // Estado para armazenar a contagem de itens no carrinho
  const [cartCount, setCartCount] = useState(0);

  return (
    <S.ContainerHeader>
      <S.ContentLeft>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </S.ContentLeft>
      <S.ContentRight>
        <S.ButtonCart color={theme.colors.black}>
          <IconCart/>
          <p>{cartCount}</p>
        </S.ButtonCart>
      </S.ContentRight>
    </S.ContainerHeader>
  );
}
