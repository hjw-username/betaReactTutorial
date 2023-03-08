import React from 'react';

// When you press “Next” on the last sculpture, the code crashes. 
// Fix the logic to prevent the crash. 
// You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.

// After fixing the crash, add a “Previous” button that shows the previous sculpture. 
// It shouldn’t crash on the first sculpture.

import { useState } from 'react';
import { sculptureList } from './data';

export default function SCM1() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  
  function handlePrevClick() {
    setIndex((index - 1 + sculptureList.length) % sculptureList.length);
  }
  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }
  
  // first & last 를 체크하지않고 순환하게 만드는 방법이 있을까?
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={() => handlePrevClick()}>
        Prev
      </button>
      <button onClick={() => handleNextClick()}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
