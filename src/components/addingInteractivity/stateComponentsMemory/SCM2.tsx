import React, { useState } from 'react';

// When you type into the input fields, nothing appears.
// It’s like the input values are “stuck” with empty strings.
//  The value of the first <input> is set to always match the firstName variable, 
//  and the value for the second <input> is set to always match the lastName variable. 
//  This is correct. Both inputs have onChange event handlers, 
//  which try to update the variables based on the latest user input (e.target.value).
//   However, the variables don’t seem to “remember” their values between re-renders. 
//   Fix this by using state variables instead.
export default function SCM2() {
  const [name, setName] = useState({
    firstName: '',
    lastName: '',
  });

  // if문으로 input의 특정태그를 인식해서 특정함수로 모듈화 할 수 있나? js처럼?
  // <input {...abc} /> 통으로 넘겨서 처리해야하나 라고 생각했는데
  // name을 남겨서 하는방식 good 이게 현대화된 코드 아닐까?
  function handleNameChange(e : React.ChangeEvent<HTMLInputElement>) {
    setName({
      ...name,
      [e.target.name]: e.target.value,
    })
  }

  function handleReset() {
    setName({
      firstName: '',
      lastName: '',
    });
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        name='firstName'
        value={name.firstName}
        onChange={handleNameChange}
      />
      <input
        placeholder="Last name"
        name='lastName'
        value={name.lastName}
        onChange={handleNameChange}
      />
      <h1>Hi, {name.firstName} {name.lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}