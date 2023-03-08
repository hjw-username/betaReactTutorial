import React from 'react';

import { useState } from 'react';
import Background from './Background';
import Box from './Box';


// There is a draggable box on a static background. 
// You can change the box’s color using the select input.

// But there is a bug. 
// If you move the box first, and then change its color, 
// the background (which isn’t supposed to move!) will “jump” to the box position. 
// But this should not happen: the Background’s position prop is set to initialPosition, 
// which is { x: 0, y: 0 }. Why is the background moving after the color change?

// Find the bug and fix it.

export interface PositionProps {
  x: number;
  y: number;
}
const initialPosition = {
  x: 0,
  y: 0
};

export default function UOS2() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  // useState 인데 shape.positionX을 직접변경해서 그럼 tsx로 수정하는게 더 힘들고 어렵다 
  // cs 적으로 말하면 mutation 관련 버그
  function handleMove(dx: number, dy: number) {
    setShape({
      ...shape,
      position: {
        ...shape.position,
        x : shape.position.x + dx,
        y : shape.position.y + dy
      }
    });
    
  }

  function handleColorChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setShape({
      ...shape,
      color: e.target.value
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
