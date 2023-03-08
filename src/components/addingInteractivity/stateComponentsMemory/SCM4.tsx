import React from 'react';

import { useState } from 'react';

// When the button is clicked, 
// this example should ask for the user’s name and then display an alert greeting them. 
// You tried to use state to keep the name, but for some reason it always shows “Hello, !“.

// To fix this code, remove the unnecessary state variable. 
// (We will discuss about why this didn’t work later.)

// Can you explain why this state variable was unnecessary?

export default function SCM4() {
  const [name, setName] = useState<string | null>('');

  function handleClick() {
    const gay = prompt('What is your name?');
    setName(gay);

    // 렌더링과 코드는 동기화로 굴러가는게 아니라서 setName을 통해 설정해도 alert를 통해 나오지않는다 그게 이유임 cex
    alert(`Hello, ${gay}!`);
  }

  return (
    <button onClick={handleClick}>
      Greet
    </button>
  );
}
