export interface ProductsQueryParams {
  page: number
  rows: number
  sortBy: 'id' | 'name' | 'price'
  orderBy: 'DESC' | 'ASC'
}

export interface ProductsResponse {
  products: Product[]
  count: number
}

export interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
  quantity: number
}
