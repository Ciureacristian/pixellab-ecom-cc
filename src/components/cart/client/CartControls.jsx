import Link from 'next/link';
import { BsCart } from 'react-icons/bs';
import { useContext } from 'react';
import { cartContext } from '@/context';

export const CartControls = () => {
  const { cart } = useContext(cartContext);

  const totalItems = cart ? cart.products.length : 0;

  return (
    <ul className="border border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          className="w-20 aspect-square flex justify-center items-center"
        >
          <span className="relative">
            <BsCart />
            <span className="absolute block w-5 bg-gradient-to-br bg-black text-white -top-4 -right-4 rounded-full text-sm text-center shadow-lg">
              {totalItems}
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
