import React from 'react';

import { useState } from 'react';
import { useImmer } from 'use-immer';
import Background from './Background';
import Box from './Box';


// This is the same buggy example as in the previous challenge. 
// This time, fix the mutation by using Immer. 
// For your convenience, useImmer is already imported, 
// so you need to change the shape state variable to use it.
export interface PositionProps {
  x: number;
  y: number;
}
const initialPosition = {
  x: 0,
  y: 0
};

export default function UOS3() {
  const [shape, updateShape] = useImmer({
    color: 'orange',
    position: initialPosition
  });

  // useState 인데 shape.positionX을 직접변경해서 그럼 tsx로 수정하는게 더 힘들고 어렵다 
  // cs 적으로 말하면 mutation 관련 버그
  function handleMove(dx: number, dy: number) {
    updateShape(draft => {
      draft.position.x = draft.position.x + dx;
      draft.position.y = draft.position.y + dy;
    });
    
  }

  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    updateShape(draft => {
      draft.color = e.target.value;
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
