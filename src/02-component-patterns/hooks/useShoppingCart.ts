import { useState } from 'react'
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({})

  const onProductCountChange = ({ count, product }: {count: number, product: Product}) => {
    setShoppingCart(prev => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = prev

        return rest
      }

      return {
        ...prev,
        [product.id]: { ...product, count },
      }
    })
  }

  return { shoppingCart, onProductCountChange }
}
