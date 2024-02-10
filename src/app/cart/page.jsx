import {
  CartControls,
  BackToShop,
  CartTotals,
  CartDisplay,
} from '@/components/cart/client';
import { CartContext } from '@/context';

export default function CartPage() {
  return (
    <div className="container px-4 lg:px-0 mx-auto mb-12">
      <header className="flex justify-between">
        <BackToShop></BackToShop>

        <CartControls></CartControls>
      </header>

      <section className="mt-16 grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <CartDisplay></CartDisplay>
        </div>

        <aside className="col-span-4">
          <CartTotals></CartTotals>

          <div>
            <button type="button" title="Proceed to Checkout">
              Proceed to Checkout
            </button>
          </div>
        </aside>
      </section>
    </div>
  );
}
