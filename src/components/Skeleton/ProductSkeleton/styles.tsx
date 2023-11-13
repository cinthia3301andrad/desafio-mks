import styled, { keyframes } from 'styled-components'

const shimmer = keyframes`
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
`
export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 18px 14px 0 14px;
  width: 218px;
  height: 295px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  background: #fff;
  margin: 10px;
  position: relative;
`
export const ProductInfo = styled.div`
  padding: 14px 0 12px 0px;
  width: 100%;
  height: 50%;
  .content-infos-title {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
`
const SkeletonPulse = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
  overflow: hidden;
  animation: ${shimmer} 2s infinite linear;
`

export const ProductImageSkeleton = styled(SkeletonPulse)`
  width: 100%;
  height: 50%; 
`

export const ProductTitleSkeleton = styled(SkeletonPulse)`
  margin-top: 0;
  height: 20px;
  width: 80%;
`

export const ProductPriceSkeleton = styled(SkeletonPulse)`
  margin-left: 5px;
  height: 20px;
  width: 50%;
`

export const ProductDescriptionSkeleton = styled(SkeletonPulse)`
  margin-top: 10px;
  height: 40px;
  width: 100%;
`

export const BuyButtonSkeleton = styled(SkeletonPulse)`
  margin-top: 20px;
  height: 40px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`
