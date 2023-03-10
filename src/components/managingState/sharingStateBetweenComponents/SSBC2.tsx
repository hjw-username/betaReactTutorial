import React from 'react';

import { useState } from 'react';
import { foods, filterItems, foodProps } from './Data';

// In this example, the SearchBar has its own query state that controls the text input. 
// Its parent FilterableList component displays a List of items, 
// but it doesn’t take the search query into account.

// Use the filterItems(foods, query) function to filter the list according to the search query. 
// To test your changes, verify that typing “s” into the input filters down the list to “Sushi”, “Shish kebab”, and “Dim sum”.

// Note that filterItems is already implemented and imported so you don’t need to write it yourself!

// handleChange가 호출될때마다 filterItems 같이 호출되서 변경되네
export default function SSBC2() {
  const [query, setQuery] = useState('');
  const searchResult = filterItems(foods, query);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery(e.target.value);
  }


  return (
    <>
      <SearchBar query={query} onChange={handleChange} />
      <hr />
      <List items={searchResult} />
    </>
  );
}

function SearchBar({query, onChange}: {query: string, onChange:(e:any) => void}) {
  
  return (
    <label>
      Search:{' '}
      <input
        value={query}
        onChange={onChange}
      />
    </label>
  );
}

function List({ items }: {items: foodProps[]}) {
  return (
    <table>
      <tbody>
        {items.map(food => (
          <tr key={food.id}>
            <td>{food.name}</td>
            <td>{food.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
