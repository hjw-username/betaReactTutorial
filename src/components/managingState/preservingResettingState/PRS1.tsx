import React from 'react';

import { useState } from 'react';
// This example shows a message when you press the button. 
// However, pressing the button also accidentally resets the input. 
// Why does this happen? Fix it so that pressing the button does not reset the input text.

// 삼항연산자를 제외하고 더 좋은 리액트식 기법이 있는지 물어봤는데 없는거같네
interface FormProps {
  setText: React.Dispatch<React.SetStateAction<string>>;
}

function Form({ setText }: FormProps) {
  const [textValue, setTextValue] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextValue(value);
    setText(value);
  };

  return (
    <textarea value={textValue} onChange={handleInputChange} />
  );
}

export default function PRS1() {
  const [showHint, setShowHint] = useState(false);
  const [text, setText] = useState('');
  
  const handleShowHintClick = () => {
    setShowHint(true);
  }
  
  const handleHideHintClick = () => {
    setShowHint(false);
  }
  
  return (
    <div>
      {showHint ? (
        <div>
          <p><i>Hint: Your favorite city?</i></p>
          <Form setText={setText} />
          <button onClick={handleHideHintClick}>Hide hint</button>
        </div>
      ) : (
        <div>
          <Form setText={setText} />
          <button onClick={handleShowHintClick}>Show hint</button>
        </div>
      )}
      <p>Input value: {text}</p>
    </div>
  );
}
