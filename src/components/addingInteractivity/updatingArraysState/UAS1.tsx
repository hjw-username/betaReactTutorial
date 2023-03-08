import React from 'react';

import { useState } from 'react';

interface productProps {
  id: number;
  name: string;
  count: number;
}

const initialProducts : productProps[] = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Cheese',
  count: 5,
}, {
  id: 2,
  name: 'Spaghetti',
  count: 2,
}];

// Fill in the handleIncreaseClick logic so that pressing ”+” increases the corresponding number:
export default function UAS1() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId: number) {
    setProducts(products.map((product) => {
      if(product.id == productId) {
        return { ...product, count: product.count + 1}
      } else {
        return product
      }
    }));
  }

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
        </li>
      ))}
    </ul>
  );
}