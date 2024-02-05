import Image from 'next/image';
import Link from 'next/link';
import css from 'styled-jsx/css';
import { useState } from 'react';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;

  const productUrl = `/products/${id}`;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article className="text-center  w-full flex flex-col justify-between gap-4">
      <header>
        <Link href={productUrl} title={title}>
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline"
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

        <div>Price: ${price}</div>

        <footer>
          <button
            onClick={() => handleAddToCart(id)}
            className="bg-black hover:bg-amber-400 text-white  font-bold py-5 px-8 rounded transition-colors border-2 "
          >
            Add to Cart
          </button>
        </footer>
      </section>
    </article>
  );
};
