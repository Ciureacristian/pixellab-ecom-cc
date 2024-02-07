import Image from 'next/image';
import Link from 'next/link';
import css from 'styled-jsx/css';
import { useState } from 'react';
import { RatingStar } from '@/components/common/rating';
import { useCart } from '@/hooks/useCart';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;

  const productUrl = `/products/${id}`;
  const [isHovered, setIsHovered] = useState(false);
  const { isInCart, addToCart, removeFromCart } = useCart();

  const handleAddToCart = (productId) => {
    if (isInCart(productId)) {
      removeFromCart(productId);
    } else {
      addToCart(productId);
    }
  };

  return (
    <div className="text-center  w-full flex flex-col justify-between gap-4">
      <header>
        <Link href={productUrl} title={title}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline place-items-center"
          >
            <Image
              width={200}
              height={200}
              src={imageUrl}
              alt={`Image for product ${title}`}
              objectFit="contain"
              className={`inline  transition-transform ${
                isHovered ? 'scale-105' : ''
              }`}
              layout="response"
            ></Image>
          </div>
        </Link>
      </header>

      <section className="mt-8 text-center text-sm flex flex-col items-center gap-4">
        <h1 className="uppercase text-zinc-400 mb-2">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>

        <div>
          <RatingStar></RatingStar>
        </div>

        <div>Price: ${price}</div>

        <footer>
          <button
            onClick={() => handleAddToCart(id)}
            className="bg-black hover:bg-amber-400 text-white font-bold py-5 px-8 rounded transition-colors border-2"
          >
            {isInCart(id) ? 'Remove from Cart' : 'Add to Cart'}
          </button>
        </footer>
      </section>
    </div>
  );
};
