
import { useQuery } from 'react-query';
import { ProductsResponse, ProductsQueryParams } from '../types';

async function fetchProducts(params: ProductsQueryParams): Promise<ProductsResponse> {
  const queryParams = new URLSearchParams({
    page: params.page.toString(),
    rows: params.rows.toString(),
    sortBy: params.sortBy,
    orderBy: params.orderBy,
  }).toString();

  const response = await fetch(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?${queryParams}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export function useProducts(params: ProductsQueryParams) {
  return useQuery<ProductsResponse, Error>(
    ['products', params.page, params.rows, params.sortBy, params.orderBy],
    () => fetchProducts(params)
  );
}
