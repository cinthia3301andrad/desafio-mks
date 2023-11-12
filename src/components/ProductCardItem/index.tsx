import React from 'react'


import { Product } from '@/types'

import { formatPriceToBRL } from '@/utils/stringsFormat'
import { useCart } from '@/context/CartContext'

import * as S from './styles'
const ProductCardItem: React.FC<Product> = ({
  id,
  name,
  price,
  photo
}) => {
  const { decrementItemQuantity, incrementItemQuantity, getItemCount } =
    useCart()


  return (
    <S.ProductCardItemContainer>
      <S.ProductImage src={photo} alt={name} />
      <S.ProductInfo>
        <div className="content-infos-title">
          <S.ProductTitle>{name}</S.ProductTitle>
          <S.ButtonsAddDel>
            <button onClick={() => decrementItemQuantity(id)}>-</button>
            <p>{getItemCount(id)}</p>
            <button onClick={() => incrementItemQuantity(id)}>+</button>
          </S.ButtonsAddDel>
          <S.ProductPrice>{formatPriceToBRL(price)}</S.ProductPrice>
        </div>
      </S.ProductInfo>
    </S.ProductCardItemContainer>
  )
}

export default ProductCardItem
