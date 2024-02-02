import Link from 'next/link';
import { BsCart } from 'react-icons/bs';

export const CartControls = () => {
  return (
    <ul className="border border-zinc-200 transition-colors hover:bg-neutral-900 hover:text-white">
      <li>
        <Link
          href="/cart"
          className="w-20 aspect-square flex justify-center items-center"
        >
          <span className="relative">
            <BsCart></BsCart>
            <span className="absolute block w-5 bg-gradient-to-br bg-black text-white -top-4 -right-4 rounded-full text-sm text-center shadow-lg ">
              1
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
