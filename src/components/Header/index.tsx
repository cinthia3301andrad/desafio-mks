import { useState } from 'react';

import IconCart from '@/icons/IconCart';

import theme from '@/styles/theme';
import * as S from './styles';
import { useCart } from '@/context/CartContext';

export function Header() {
  const { items } = useCart()


  return (
    <S.ContainerHeader>
      <S.ContentLeft>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </S.ContentLeft>
      <S.ContentRight>
        <S.ButtonCart color={theme.colors.black}>
          <IconCart/>
          <p>{items?.length}</p>
        </S.ButtonCart>
      </S.ContentRight>
    </S.ContainerHeader>
  );
}
