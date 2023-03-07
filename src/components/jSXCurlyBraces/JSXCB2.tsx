import React from 'react';

// Extract the image URL into the person object.
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  },
  avatar: {
    className: 'avatar',
    src: 'https://i.imgur.com/7vQD0fPs.jpg',
    alt: 'Gregorio Y. Zara'
  }
};

// avatar 밑에 imgUrl로 보내버려 그런데
// avatar img 를 object로 묶어서 출력이 가능한가?
export default function JSXCB2() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img {...person.avatar} />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
