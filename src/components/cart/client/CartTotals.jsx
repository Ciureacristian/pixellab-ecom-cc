import { cartContext } from '@/context';
import { useProducts } from '@/hooks';
import { useContext, useState } from 'react';

export const CartTotals = () => {
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();

  if (loading) {
    return '...loading';
  }
  //TEMA SPINNER

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    const product = products.find((product) => {
      return productId === product.id;
    });
    const { price } = product;
    total += quantity * price;

    return total;
  }, 0);

  return (
    <>
      <header className="bg-zinc-400 text-white uppercase font-medium p-3">
        <h1>Cart Totals</h1>
      </header>

      <section>
        <div>
          <div className="border-b py-3">Subtotal:</div>

          <div className="border-b py-3">
            <form className="flex gap-4">
              <label>Shipping:</label>

              <div className="flex flex-col gap-4 items-start justify-start">
                <div className="flex gap-1">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    value="standard"
                    className="accent-amber-400 focus:accent-amber-400"
                  />
                  <label for="standard"> Standard (Free)</label>
                </div>

                <div className="flex gap-1">
                  <input
                    type="radio"
                    id="standard"
                    name="shipping"
                    value="standard"
                    className="accent-amber-400 focus:accent-amber-400"
                  />
                  <label for="standard"> Express ($49.00)</label>
                </div>
              </div>
            </form>
          </div>

          <div className="border-b py-3">Total: {total}</div>
        </div>
      </section>
    </>
  );
};
