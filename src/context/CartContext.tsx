import { Product } from '@/types'
import React, {
  createContext,
  useState,
  useContext,
  PropsWithChildren
} from 'react'
import { toast } from 'react-toastify'

interface CartContextType {
  items: Product[]
  isOpenMenu: boolean
  addItem: (item: Product) => void
  getItemCount: (id: number) => number
  incrementItemQuantity: (id: number) => void
  decrementItemQuantity: (id: number) => void
  getTotalPrice: () => number
  openMenu: () => void
  closeMenu: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [items, setItems] = useState<Product[]>([])
  const [isOpenMenu, setIsOpeMenu] = useState(false)

  const openMenu = () => setIsOpeMenu(true)

  const closeMenu = () => setIsOpeMenu(false)

  const addItem = (newItem: Product) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(
        (item) => item.id === newItem.id
      )
      if (existingItemIndex > -1) {
        const updatedItems = [...prevItems]
        const existingItem = updatedItems[existingItemIndex]
        const updatedItem = {
          ...existingItem,
          quantity: (existingItem.quantity || 1) + 1
        }
        updatedItems[existingItemIndex] = updatedItem
        return updatedItems
      } else {
        return [...prevItems, { ...newItem, quantity: 1 }]
      }
    })
    toast.success('Produto adicionado ao carrinho!', {
      position: 'top-right',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined
    })
  }

  const incrementItemQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      )
    )
  }

  const decrementItemQuantity = (id: number) => {
    setItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: (item.quantity || 1) - 1 }
            : item
        )
        .filter((item) => item?.quantity > 0)
    )
  }
  const getItemCount = (id: number) => {
    const item = items.find((item) => item.id === id)
    return item ? item?.quantity || 0 : 0
  }
  const getTotalPrice = () => {
    return items.reduce((total, item) => {
      const itemPrice = parseFloat(item.price.replace(',', '.'))
      return total + itemPrice * (item.quantity || 1)
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        getItemCount,
        incrementItemQuantity,
        decrementItemQuantity,
        getTotalPrice,
        isOpenMenu,
        openMenu,
        closeMenu
      }}
    >
      {' '}
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
