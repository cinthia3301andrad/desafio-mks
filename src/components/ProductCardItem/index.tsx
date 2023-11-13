import React from 'react'

import { Product } from '@/types'

import { formatPriceToBRL } from '@/utils/stringsFormat'
import { useCart } from '@/context/CartContext'

import * as S from './styles'
const ProductCardItem: React.FC<Product> = ({ id, name, price, photo }) => {
  const {
    decrementItemQuantity,
    incrementItemQuantity,
    getItemCount,
    removeItem
  } = useCart()

  return (
    <S.ProductCardItemContainer data-testid={name}>
      <S.ProductImage src={photo} alt={name} />
      <S.ProductInfo>
        <div className="content-infos-title">
          <S.ProductTitle>{name}</S.ProductTitle>
          <S.ButtonsAddDel>
            <button
              data-testid="decrease-button-1"
              onClick={() => decrementItemQuantity(id)}
            >
              -
            </button>
            <p>{getItemCount(id)}</p>
            <button
              data-testid="increase-button-1"
              onClick={() => incrementItemQuantity(id)}
            >
              +
            </button>
          </S.ButtonsAddDel>
          <S.ProductPrice>{formatPriceToBRL(price)}</S.ProductPrice>
        </div>
      </S.ProductInfo>
      <S.ButtonRemove onClick={() => removeItem(id)}>X</S.ButtonRemove>
    </S.ProductCardItemContainer>
  )
}

export default ProductCardItem
