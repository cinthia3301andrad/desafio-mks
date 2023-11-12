'use client'
import React from 'react'
import * as S from './styles'

const ProductSkeleton: React.FC = () => {
  return (
    <S.ProductCardContainer>
      <S.ProductImageSkeleton />
      <S.ProductInfo>
        <div className='content-infos-title'><S.ProductTitleSkeleton />
        <S.ProductPriceSkeleton /></div>
        <S.ProductDescriptionSkeleton />
        <S.BuyButtonSkeleton />
      </S.ProductInfo>
    </S.ProductCardContainer>
  )
}

export default ProductSkeleton
