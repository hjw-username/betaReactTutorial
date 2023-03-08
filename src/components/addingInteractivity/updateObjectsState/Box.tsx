import React from 'react';
import { useState } from 'react';
import { PositionProps } from './UOS2';

export default function Box({
  children,
  color,
  position,
  onMove
}: { children : React.ReactNode, color: string, position: PositionProps, onMove: (dx: number, dy: number) => void }) {

  // 이전방식이 뭐냐면 ({x: 0, y: 0}) 이였엉
  // 이런방식은 업데이트 할때마다 null 값을 처리해야 하므로 이전방식에 비해 가독성이 떨어지고 오류가 발생하기 쉽대
  const [
    lastCoordinates,
    setLastCoordinates
  ] = useState<{x: number, y: number} | null>(null);

  function handlePointerDown(e: React.PointerEvent<HTMLDivElement>) {
    const target = e.target as HTMLDivElement 
    target.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (lastCoordinates) {
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;
      onMove(dx, dy);
    }
  }

  function handlePointerUp(e: React.PointerEvent<HTMLDivElement>) {
    setLastCoordinates(null);
  }

  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: 'grab',
        backgroundColor: color,
        position: 'absolute',
        border: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transform: `translate(
          ${position.x}px,
          ${position.y}px
        )`,
      }}
    >{children}</div>
  );
}
