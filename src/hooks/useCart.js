import { useEffect, useState } from 'react';
import { baseUrl } from '..';

export const useCart = (cartId = 2) => {
  const [cartProducts, setCartProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [cart, setCart] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}/carts/${cartId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch cart');
        }
        return response.json();
      })
      .then((cart) => {
        setCart(cart);
        setCartProducts(cart.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [cartId]);

  const isInCart = (productId) => {
    return (
      cart &&
      cart.products &&
      cart.products.some((product) => product.id === productId)
    );
  };

  const addToCart = (productId) => {
    setCart((prevCart) => {
      return {
        ...prevCart,
        products: [
          ...prevCart.products,
          {
            id: productId,
          },
        ],
      };
    });
  };

  const removeFromCart = (productId) => {};

  return { cartProducts, loading, error, isInCart, addToCart, removeFromCart };
};
