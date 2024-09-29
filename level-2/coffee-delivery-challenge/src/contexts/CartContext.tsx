import { createContext, ReactNode, useState } from "react"
import { Coffee } from "../pages/Home/components/CoffeeCard"
import { produce } from "immer"

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  cartQuantity: number
  addCoffeeToCart: (coffee: CartItem) => void
  removeCoffeeFromCard: (cartItemId: number) => void
  changeCartItemQuantiy: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const cartQuantity = cartItems.length

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyExistsInCard = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCard < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCard].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantiy(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistInCart = cartItems.findIndex(
        (cartItem) => cartItem.id === cartItemId
      )

      if (coffeeExistInCart >= 0) {
        const item = draft[coffeeExistInCart]
        draft[coffeeExistInCart].quantity =
          type === "increase" ? item.quantity + 1 : item.quantity - 1
      }
    })

    setCartItems(newCart)
  }

  function removeCoffeeFromCard(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = draft.findIndex(
        (cart) => cart.id === cartItemId
      )

      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart)
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        addCoffeeToCart,
        changeCartItemQuantiy,
        removeCoffeeFromCard,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
