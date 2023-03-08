import React from 'react';
import { useState } from 'react';


// This form has a few bugs. 
// Click the button that increases the score a few times. 
// Notice that it does not increase. 
// Then edit the first name, and notice that the score has suddenly “caught up” with your changes. 
// Finally, edit the last name, and notice that the score has disappeared completely.

// Your task is to fix all of these bugs.
//  As you fix them, explain why each of them happens.

// 버그만 수정 ㅇ
export default function UOS1() {
  const [player, setPlayer] = useState({
    firstName: 'Ranjani',
    lastName: 'Shettar',
    score: 10,
  });

  function handlePlusClick() {
    setPlayer({
      ...player,
      score: player.score + 1,
    });
  }

  function handleFirstNameChange(e: React.ChangeEvent<HTMLInputElement> ) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e: React.ChangeEvent<HTMLInputElement> ) {
    setPlayer({
      ...player,
      lastName: e.target.value
    });
  }

  return (
    <>
      <label>
        sss
        Score: <b>{player.score}</b>
        {' '}
        <button onClick={handlePlusClick}>
          +1
        </button>
      </label>
      <label>
        First name:
        <input
          value={player.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:
        <input
          value={player.lastName}
          onChange={handleLastNameChange}
        />
      </label>
    </>
  );
}
