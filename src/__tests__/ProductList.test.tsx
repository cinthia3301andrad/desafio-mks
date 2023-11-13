import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductList from '@/app/page'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { useProducts as originalUseProducts } from '../hooks/useProducts'

const useProducts = originalUseProducts as jest.MockedFunction<
  typeof originalUseProducts
>
jest.mock('../hooks/useProducts', () => ({
  useProducts: jest.fn()
}))

describe('ProductList Page', () => {
  it('exibe skeletons durante o carregamento', () => {
    useProducts.mockReturnValue({ isLoading: true, error: null, data: null })
    render(
      <DefaultLayout>
        <ProductList />
      </DefaultLayout>
    )
    const skeletonDiv = screen.getByTestId('test-skeleton')
    expect(skeletonDiv).toBeInTheDocument()
  })

  it('exibe produtos quando os dados são carregados', () => {
    const mockData = {
      products: [
        {
          id: 1,
          name: 'Produto 1',
          price: '100,00',
          quantity: 1,
          brand: 'Marca 1',
          description: 'Descrição do Produto 1',
          photo: 'url-do-produto-1',
          createdAt: '2021-01-01',
          updatedAt: '2021-01-02'
        }
      ]
    }
    useProducts.mockReturnValue({
      isLoading: false,
      error: null,
      data: mockData
    })
    render(
      <DefaultLayout>
        <ProductList />
      </DefaultLayout>
    )
    expect(screen.getByText('Produto 1')).toBeInTheDocument()
  })

     it('exibe uma mensagem de erro', () => {
    useProducts.mockReturnValue({ isLoading: false, error: new Error('Erro de teste'), data: null });
    render(   <DefaultLayout>
      <ProductList />
    </DefaultLayout>);
  expect(screen.getByText("Error: Erro de teste")).toBeInTheDocument()
});  

})
