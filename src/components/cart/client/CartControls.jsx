import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import { useContext } from 'react';
import { cartContext } from '@/context';

export const CartControls = () => {
  const { cartProducts } = useContext(cartContext);

  const totalItems = cartProducts.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <ul className="border border-zinc-400 transition-colors  hover:text-white">
      <li>
        <Link
          href="/cart"
          className="w-20 h-20  flex justify-center items-center transition-colors hover:text-amber-400 relative"
        >
          <span className="relative">
            <BsCart></BsCart>
            <span className="absolute block w-5 bg-gradient-to-br bg-black text-white -top-4 -right-4 rounded-full text-sm text-center shadow-lg">
              {totalItems}
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
