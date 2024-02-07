import { useCart } from '@/hooks/useCart';
import React, { createContext } from 'react';

export const CartContext = ({ children }) => {
  const { cartProducts } = useCart();

  return (
    <cartContext.Provider value={{ cartProducts }}>
      {children}
    </cartContext.Provider>
  );
};

export const cartContext = createContext();
