import { ProductTile } from '.';
import { css } from '@emotion/css';
import { useProducts } from '../../../hooks';
import { useContext, useEffect, useState } from 'react';
import { uiContext } from '@/context';

export const ProductGrid = () => {
  const { itemsPerRow } = useContext(uiContext);
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);
  const [perPage, setPerPage] = useState(8);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newPaginatedProducts = products
      .slice()
      .splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newPaginatedProducts);
  }, [products, perPage, page]);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;

    @media (min-width: 1024px) {
      column-gap: 32px;
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  if (loading) {
    return <div className="container mx-auto px-4">...loading</div>;
  }

  if (error.trim().length > 0) {
    return (
      <div className="container mx-auto px-4">
        {' '}
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  const pageCount = Math.ceil(products.length / perPage);

  return (
    <>
      <ul className={gridCssClass}>
        {paginatedProducts.map((product) => {
          const { id } = product;

          return (
            <li key={id} className="flex opacity-100">
              <ProductTile product={product}></ProductTile>
            </li>
          );
        })}
      </ul>

      <div className="flex justify-center">
        <ul className="flex gap-2">
          {Array(pageCount)
            .fill(' ')
            .map((_, index) => {
              const pageIndex = index + 1;
              return (
                <li key={index}>
                  <button
                    type="button"
                    title={`Page ${pageIndex}`}
                    className={`border border-zinc-200 p-2 mt-4 mb-4 rounded-sm hover:bg-black  hover:text-white transition-colors ${
                      pageIndex === page ? 'bg-black text-white' : ''
                    }`}
                    onClick={() => {
                      setPage(pageIndex);
                    }}
                  >
                    {pageIndex}
                  </button>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};
