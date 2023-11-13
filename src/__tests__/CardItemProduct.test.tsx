import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { CartContext, CartContextType } from '@/context/CartContext' // Ajuste o caminho conforme necessário
import { DefaultLayout } from '@/layouts/DefaultLayout'
import { Product } from '@/types'
import '@testing-library/jest-dom'
import ProductCardItem from '@/components/ProductCardItem'

describe('ProductCardItem', () => {
  let quantity = 1
  const mockItems: Product[] = [
    {
      id: 1,
      name: 'Produto 1',
      price: '100,00',
      quantity: quantity,
      brand: 'Marca 1',
      description: 'Descrição do Produto 1',
      photo: 'url-do-produto-1',
      createdAt: '2021-01-01',
      updatedAt: '2021-01-02'
    }
  ]

  const mockContext: CartContextType = {
    items: mockItems,
    getTotalPrice: () =>
      mockItems.reduce(
        (total, item) =>
          total + parseFloat(item.price.replace(',', '.')) * item.quantity,
        0
      ),
    isOpenMenu: true,
    addItem: jest.fn(),
    getItemCount: jest
      .fn()
      .mockImplementation(
        (id) => mockItems.find((item) => item.id === id)?.quantity ?? 0
      ),
    incrementItemQuantity: jest.fn((id) => {
      const item = mockItems.find((item) => item.id === id)
      if (item) {
        item.quantity += 1
        quantity = item.quantity
      }
    }),
    decrementItemQuantity: jest.fn((id) => {
      const item = mockItems.find((item) => item.id === id)
      if (item && item.quantity > 0) {
        item.quantity -= 1
        quantity = item.quantity
      }
    }),
    openMenu: jest.fn(),
    closeMenu: jest.fn()
  }

  const MockCartProvider: React.FC<{
    children: any
    value: CartContextType
  }> = ({ children, value }) => {
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
  }
  it('exibe as informações do produto corretamente', () => {
    render(
      <DefaultLayout>
        {' '}
        <MockCartProvider value={mockContext}>
          <ProductCardItem {...mockItems[0]} />
        </MockCartProvider>
      </DefaultLayout>
    )
    // Verifica se os itens do carrinho estão sendo exibidos
    expect(screen.getByText('Produto 1')).toBeInTheDocument()
    expect(screen.getByText('R$ 100')).toBeInTheDocument()
    expect(screen.getByAltText('Produto 1')).toHaveAttribute(
      'src',
      'url-do-produto-1'
    )
  })

  it('chama incrementItemQuantity ao clicar no botão de incremento', () => {
    render(
      <DefaultLayout>
        {' '}
        <MockCartProvider value={mockContext}>
          <ProductCardItem {...mockItems[0]} />
        </MockCartProvider>
      </DefaultLayout>
    )

    const incrementButton = screen.getByTestId('increase-button-1')
    fireEvent.click(incrementButton)
    expect(mockContext.incrementItemQuantity).toHaveBeenCalledWith(1)
  })

  it('chama decrementItemQuantity ao clicar no botão de decremento', () => {
    render(
      <DefaultLayout>
        {' '}
        <MockCartProvider value={mockContext}>
          <ProductCardItem {...mockItems[0]} />
        </MockCartProvider>
      </DefaultLayout>
    )

    const decrementButton = screen.getByTestId('decrease-button-1')
    fireEvent.click(decrementButton)
    expect(mockContext.decrementItemQuantity).toHaveBeenCalledWith(1)
  })

  it('aumenta a quantidade ao clicar no botão de incremento', () => {
    const { rerender } = render(
      <DefaultLayout>
        <MockCartProvider value={mockContext}>
          <ProductCardItem {...mockItems[0]} />
        </MockCartProvider>
      </DefaultLayout>
    )

    const incrementButton = screen.getByTestId('increase-button-1')
    fireEvent.click(incrementButton)
    fireEvent.click(incrementButton)
    // Re-renderiza o componente para refletir a atualização do estado
    rerender(
      <DefaultLayout>
        <MockCartProvider value={mockContext}>
          <ProductCardItem {...mockItems[0]} />
        </MockCartProvider>
      </DefaultLayout>
    )

    expect(screen.getByText('3')).toBeInTheDocument()
  })

  it('diminui a quantidade ao clicar no botão de decremento', () => {
    const { rerender } = render(
      <DefaultLayout>
        <MockCartProvider value={mockContext}>
          <ProductCardItem {...mockItems[0]} />
        </MockCartProvider>
      </DefaultLayout>
    )

    const decreaseButton = screen.getByTestId('decrease-button-1')

    fireEvent.click(decreaseButton)

    // Re-renderiza o componente para refletir a atualização do estado
    rerender(
      <DefaultLayout>
        <MockCartProvider value={mockContext}>
          <ProductCardItem {...mockItems[0]} />
        </MockCartProvider>
      </DefaultLayout>
    )

    expect(screen.getByText('2')).toBeInTheDocument()
  })
})
