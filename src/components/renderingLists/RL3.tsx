import React from 'react';
import { RecipeProps, recipes } from './data';

// This RecipeList component contains two nested map calls.
//  To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props.
//   Where do you place the outer key and why?


function Recipe({recipe} : {recipe : RecipeProps} ) {
  return (
    <div key={recipe.id}>
      <h2>{recipe.name}</h2>
      <ul>
        {recipe.ingredients.map(ingredient =>
          <li key={ingredient}>
            {ingredient}
          </li>
        )}
      </ul>
    </div>
  );
}
// 레시피 컴포넌트를 id , name , ingredients props를 추출하라는데 그냥 recipe를 통째로 넘기면안됨?
export default function RL3() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => 
        <Recipe recipe={recipe}/>
      )}
    </div>
  );
}
