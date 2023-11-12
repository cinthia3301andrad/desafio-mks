'use client'
import ProductCard from '@/components/ProductCard';
import ProductSkeleton from '@/components/Skeleton/ProductSkeleton';
import { useProducts } from '@/hooks/useProducts';
import { ProductsQueryParams } from '@/types';
import * as S from './styles';


const ProductList: React.FC = () => {
  const productsQueryParams:ProductsQueryParams  = {
    page: 1,
    rows: 10,
    sortBy: 'price',
    orderBy: 'ASC',
  };

  const { data, isLoading, error } = useProducts(productsQueryParams);

  if (isLoading) {
    return (
      <>
        <ProductSkeleton />
        <ProductSkeleton />
        <ProductSkeleton /> {/* Repita conforme necessário para o número de skeletons desejados */}
      </>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <S.ContainerProductsList>
      {data?.products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </S.ContainerProductsList>
  );
};

export default ProductList;