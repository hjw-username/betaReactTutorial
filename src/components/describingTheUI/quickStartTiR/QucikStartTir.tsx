import React, { useState } from 'react';

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

interface productTableProps {
  products: Product[];
  filterText: string;
  isStockOnly: boolean;
}

interface searchBarProps {
  filterText: string;
  isStockOnly: boolean;
  onFilterTextChange: (filterText: string) => void;
  onIsStockOnlyChange: (isStockOnly: boolean) => void;
}

// 일일이 다 interface를 이렇게 작성해야하는지 의문이 드는데 
// typescript로 변환하는게 아직은 번거롭고 어렵다

const PRODUCTS: Product[] = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
]


function FilterableProductTable({products} : {products : Product[]}) {
  const [filterText, setFilterText] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <div>
      <SearchBar 
        filterText={filterText} 
        isStockOnly={isStockOnly} 
        onFilterTextChange={setFilterText} 
        onIsStockOnlyChange={setIsStockOnly} />
      <ProductTable 
        products={products} 
        filterText={filterText}
        isStockOnly={isStockOnly} />
    </div>
  );
}

/* 
 * 이렇게 작성하면 category 가 string 이 아닌 다른 타입으로 넘겨졌을때 일일이 다 수정해야하는데
 * product를 그냥 넘겨 버리는게 낫나? 더 좋은 방법은 없을까 typescript 스벌
*/
function ProductCategoryRow({category} : {category: string}) {
  return (
    <>
      <tr>
        <th colSpan={2}>
          {category}
        </th>
      </tr>
    </>
  )
}

function ProductRow({product} : {product : Product}) {
  const name = product.stocked ? product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;
  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    </>
  )
}

function ProductTable({products, filterText, isStockOnly} : productTableProps) {
  const rows: JSX.Element[] = [];
  let lastCategory = '';

  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return ;
    }
    if(isStockOnly && !product.stocked) {
      return ;
    }
    if(product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
          category={product.category}
          key={product.category}
        />
      )
    }
    rows.push(
      <ProductRow 
        product={product}
        key={product.name}
      />
    )
    lastCategory = product.category;
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchBar({filterText, isStockOnly, onFilterTextChange, onIsStockOnlyChange} : searchBarProps) {
      return (
        <form>
          <input 
            type="text"
            value={filterText} placeholder="search.."
            onChange={(e) => onFilterTextChange(e.target.value)} />
          <label>
            <input 
              type="checkbox" 
              checked={isStockOnly} 
              onChange={(e) => onIsStockOnlyChange(e.target.checked)} />
            {' '}
            Only show products in stock
          </label>
        </form>
      );
}

export default function QucikStartTir() {
  return <FilterableProductTable products={PRODUCTS} />;
}