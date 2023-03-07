import React, { Fragment } from 'react';

import { recipes } from './data';

// Make a list of recipes from this array! 
// For each recipe in the array, display its name as an <h2> and list its ingredients in a <ul>.

// map을 써서 해보라는거지
export default function RL2() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => 
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => 
              <li key={ingredient}>
                {ingredient}
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
