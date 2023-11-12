import React from 'react'
import * as S from './styles'
import IconShopBag from '@/icons/IconShopBag'
import theme from '@/styles/theme'
import { Product } from '@/types'

import { formatPriceToBRL } from '@/utils/stringsFormat'
import { useCart } from '@/context/CartContext'

const ProductCard: React.FC<Product> = ({
  id,
  name,
  price,
  photo,
  description,
  brand,
  createdAt,
  updatedAt
}) => {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price,
      photo,
      description,
      brand,
      createdAt,
      updatedAt,
      quantity: 1
    })
  }
  return (
    <S.ProductCardContainer>
      <S.ProductImage src={photo} alt={name} />
      <S.ProductInfo>
        <div className="content-infos-title">
          <S.ProductTitle>{name}</S.ProductTitle>
          <S.ProductPrice>{formatPriceToBRL(price)}</S.ProductPrice>
        </div>
        <S.ProductDescription>{description}</S.ProductDescription>
        <S.BuyButton onClick={handleAddToCart}>
          <IconShopBag color={theme.colors.white} />
          <p>Comprar</p>
        </S.BuyButton>
      </S.ProductInfo>
    </S.ProductCardContainer>
  )
}

export default ProductCard
