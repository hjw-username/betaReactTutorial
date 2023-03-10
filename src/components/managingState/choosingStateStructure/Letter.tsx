import React from "react";
import { letterProps } from "./data";

export default function Letter({
  letter,
  isHighlighted,
  onHover,
  onToggleStar,
}: {letter: letterProps, isHighlighted: boolean, onHover: (letter1: letterProps) => void, onToggleStar: (letter2: letterProps) => void}) {
  return (
    <li
      className={
        isHighlighted ? 'highlighted' : ''
      }
      onFocus={() => {
        onHover(letter);        
      }}
      onPointerMove={() => {
        onHover(letter);
      }}
    >
      <button onClick={() => {
        onToggleStar(letter);
      }}>
        {letter.isStarred ? 'Unstar' : 'Star'}
      </button>
      {letter.subject}
    </li>
  )
}