import React from 'react'
import {  render, screen } from '@testing-library/react'
import { CartContext, CartContextType } from '@/context/CartContext'
import { MenuRight } from '@/components/MenuRight'
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Product } from '@/types'
import '@testing-library/jest-dom'

// Mock do CartProvider
const MockCartProvider: React.FC<{ children: any; value: CartContextType }> = ({
  children,
  value
}) => {
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

describe('MenuRight', () => {
  it('exibe itens do carrinho e o preço total quando aberto', () => {
    const mockItems: Product[] = [
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
      },
      {
        id: 2,
        name: 'Produto 2',
        price: '200,00',
        quantity: 2,
        brand: 'Marca 2',
        description: 'Descrição do Produto 2',
        photo: 'url-do-produto-2',
        createdAt: '2021-02-01',
        updatedAt: '2021-02-02'
      }
    ]
    const mockTotalPrice = mockItems.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace(',', '.')) * item.quantity,
      0
    )

    render(
      <DefaultLayout>
        {' '}
        <MockCartProvider
          value={{
            items: mockItems,
            getTotalPrice: () => mockTotalPrice,
            isOpenMenu: true,
            addItem: jest.fn(),
            getItemCount: jest.fn(),
            incrementItemQuantity: jest.fn(),
            decrementItemQuantity: jest.fn(),
            openMenu: jest.fn(),
            closeMenu: jest.fn()
          }}
        >
          <MenuRight />
        </MockCartProvider>
      </DefaultLayout>
    )
    // Verifica se os itens do carrinho estão sendo exibidos
    expect(screen.getByText('Produto 1')).toBeInTheDocument()
    expect(screen.getByText('Produto 2')).toBeInTheDocument()
    // Verifica se o preço total está sendo exibido
    expect(
      screen.getByText((content) => content.includes(`${mockTotalPrice}`))
    ).toBeInTheDocument()
  })
})
