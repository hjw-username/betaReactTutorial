import React, { useState } from 'react';
import { useImmer } from 'use-immer';

// Make it so that clicking on the picture removes the background--active CSS class from the outer <div>,
//  but adds the picture--active class to the <img>.
//   Clicking the background again should restore the original CSS classes.

// Visually, you should expect that clicking on the picture removes the purple background and highlights the picture border.
//  Clicking outside the picture highlights the background,
//   but removes the picture border highlight.


interface elementProps {
  dataName: string;
  isActive: boolean;
}


// 이런 느낌으로 코드짜고싶은데 당장 못찾겠으니까 패스시키고 넘어가자
export default function RIWS1() {
  const [isActive, setIsActive] = useImmer<elementProps[]>([]);
  
  function handleActiveClass(e : React.MouseEvent<HTMLElement>) {
    e.stopPropagation();
    const target = e.target as HTMLElement;
    const dataName = target.getAttribute('data-name');
    // setIsActive(isActive.map(data => {
    //   if(data.dataName == dataName) {
    //     return {
    //       ...data,
    //       isActive: !isActive
    //     }
    //   } else {
    //     return {
    //       ...data,
    //       isActive: isActive
    //     }
    //   }
    // }));
  }

  return (
    <div data-name="background" className="background" onClick={handleActiveClass}>
      <img
        data-name="picture"
        className="picture"
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
        onClick={handleActiveClass}
      />
    </div>
  );
}