import React from 'react';

// This example shows a list of all people.

// Change it to show two separate lists one after 
// another: Chemists and Everyone Else. Like previously, 
// you can determine whether a person is a chemist by checking if person.profession === 'chemist'.

import { people } from './data';
import { getImageUrl } from './utils';

// 같은 그룹끼리 묶어서 표시하라고 하네 그럼 정렬
export default function RL1() {
  const sortedPeople = people.sort((a, b) => 
    a.profession.localeCompare(b.profession)
  );

  const listItems : React.ReactNode = sortedPeople.map(person => 
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
