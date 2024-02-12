import { cartContext } from '@/context';
import { useContext } from 'react';

export const AddToCart = ({ product }) => {
  const { title, id } = product;
  const { setCartProducts, cartProducts } = useContext(cartContext);
  const loading = false;
  const isInCart = cartProducts.some((item) => item.productId === id);

  const onClick = () => {
    if (isInCart) {
      const updatedCartProducts = cartProducts.filter(
        (item) => item.productId !== id,
      );
      setCartProducts(updatedCartProducts);
    } else {
      setCartProducts([
        ...cartProducts,
        {
          quantity: 1,
          productId: id,
        },
      ]);
    }
  };

  return (
    <button
      type="button"
      className="bg-black text-white uppercase font-medium text-sm py-3 px-6 hover:bg-amber-400 transition-colors"
      disabled={loading}
      title={isInCart ? `Remove ${title} from cart` : `Add ${title} to cart`}
      onClick={onClick}
    >
      {loading ? '...loading' : isInCart ? 'Remove from Cart' : 'Add to Cart'}
    </button>
  );
};
