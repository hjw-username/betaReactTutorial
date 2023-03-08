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

// This shopping cart has a working ”+” button, but the ”–” button doesn’t do anything.
//  You need to add an event handler to it so that pressing it decreases the count of the corresponding product.
//  If you press ”–” when the count is 1,
//   the product should automatically get removed from the cart.
//    Make sure it never shows 0.
export default function UAS2() {
  const [
    products,
    setProducts
  ] = useState<productProps[]>(initialProducts)

  function handleIncreaseClick(productId: number) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }

  function handleDecreaseClick(productId: number) {
    let yetFilterProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1
        };
      } else {
        return product;
      }
    });

    setProducts(yetFilterProducts.filter((product) => {
      return product.count > 0
    }));
  }

  // 어느부분에 필터를 넣어야할까
  // function handleDecreaseClick(productId: number) {
  //   setProducts(
  //     products
  //       .map((product) => {
  //         if (product.id === productId) {
  //           const newCount = product.count - 1;
  //           if (newCount <= 0) {
  //             return null;
  //           } else {
  //             return {
  //               ...product,
  //               count: newCount,
  //             };
  //           }
  //         } else {
  //           return product;
  //         }
  //       })
  //       .filter((product): product is productProps => product !== null)
  //   );
  // }

  // 여기에 넣는건 너무 지저분해질거같고
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
          <button onClick={() => {
            handleDecreaseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
