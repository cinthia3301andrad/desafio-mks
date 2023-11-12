import React, { useState } from 'react'
import { useCart } from '@/context/CartContext'
import * as S from './styles'
import ProductCardItem from '../ProductCardItem'
import { formatPriceToBRL } from '@/utils/stringsFormat'

export const MenuRight: React.FC = () => {
  const { items, getTotalPrice, isOpenMenu, closeMenu } = useCart()

  return (
    <>
      <S.ContainerMenuRight isOpen={isOpenMenu}>
        <h1>
          Carrinho <br /> de compras
        </h1>
        <S.CloseButton onClick={closeMenu}>X</S.CloseButton>
        <S.ContentListProducts>
          {items.map((item) => (
            <ProductCardItem {...item} />
          ))}
        </S.ContentListProducts>
        <S.ContentTotal>
          <p>Total:</p> <p>{formatPriceToBRL(getTotalPrice())}</p>
        </S.ContentTotal>
        <S.Footer>
          <p>Finalizar Compra</p>
        </S.Footer>
      </S.ContainerMenuRight>
    </>
  )
}
