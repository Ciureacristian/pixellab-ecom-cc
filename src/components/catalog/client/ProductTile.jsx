import Image from 'next/image';
import Link from 'next/link';

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;

  const productUrl = `/products/${id}`;

  return (
    <article className="text-center  w-full flex flex-col justify-between gap-4">
      <header>
        <Link href={productUrl} title={title}>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            objectFit="contain"
            className="inline"
            layout="response"
          ></Image>
        </Link>
      </header>

      <section className="mt-8 text-center text-sm flex flex-col items-center gap-4">
        <h1 className="uppercase text-zinc-400 mb-2">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>

        <div></div>

        <footer>{/* add to cart homework */}</footer>
      </section>
    </article>
  );
};
