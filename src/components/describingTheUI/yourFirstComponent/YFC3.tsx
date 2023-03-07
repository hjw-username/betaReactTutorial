import React from 'react';

// Something’s wrong with how the Profile component is declared and used. 
// Can you spot the mistake? 
// (Try to remember how React distinguishes components from the regular HTML tags!)

// component render 는 첫문자가 대문자로 시작해야한다 profile > Profile
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function YFC3() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}