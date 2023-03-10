import React from 'react';

import { useState } from 'react';
import { initialLetters, letterProps } from './data';
import Letter from './Letter';

// There is a list of letters in state. When you hover or focus a particular letter, 
// it gets highlighted. The currently highlighted letter is stored in the highlightedLetter state variable. 
// You can “star” and “unstar” individual letters, 
// which updates the letters array in state.

// This code works, but there is a minor UI glitch. When you press “Star” or “Unstar”, the highlighting disappears for a moment.
//  However, it reappears as soon as you move your pointer or switch to another letter with keyboard.
//   Why is this happening? Fix it so that the highlighting doesn’t disappear after the button click.
export default function CSS3() {
  const [letters, setLetters] = useState(initialLetters);
  const [highlightedLetter, setHighlightedLetter] = useState(-1);

  function handleHover(letterId: number) {
    setHighlightedLetter(letterId);
  }

  function handleStar(starredId: number) {
    setLetters(letters.map(letter => {
      if (letter.id === starredId) {
        return {
          ...letter,
          isStarred: !letter.isStarred
        };
      } else {
        return letter;
      }
    }));
  }

  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {letters.map(letter => (
          <Letter
            key={letter.id}
            letter={letter}
            isHighlighted={
              letter.id === highlightedLetter
            }
            onHover={() => handleHover(letter.id)}
            onToggleStar={() => handleStar(letter.id)}
          />
        ))}
      </ul>
    </>
  );
}