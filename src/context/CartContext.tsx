import { Product } from '@/types'
import React, { createContext, useState, useContext, PropsWithChildren } from 'react'
import { toast } from 'react-toastify'

interface CartContextType {
  items: Product[]
  addItem: (item: Product) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([])

  const addItem = (item: Product) => {
   
    setItems((prevItems) => {
        return [...prevItems, item]
    })
    toast.success('Produto adicionado ao carrinho!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  }

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
