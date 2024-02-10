import { useEffect, useState } from 'react';
import { baseUrl } from '..';

// the naivest cache
let cache = [];
// the naivest busy flag
let busy = false;

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  busy = true;

  useEffect(() => {
    if (cache.length === 0) {
      // fetch returns a promise
      fetch(`${baseUrl}/products`)
        .then((response) => {
          // response.json() returns a promise
          return response.json();
        })
        .then((products) => {
          cache = products;
          setProducts(products);

          setLoading(false);
        })
        .catch((error) => {
          console.dir(error);
          setLoading(false);

          setError('An error occurred');
        });
    } else {
      setProducts(cache);
      setLoading(false);
    }
  }, []);

  return { products, loading, error };
};
