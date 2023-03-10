import React from 'react';

import { useState } from 'react';

// These two inputs are independent.
//  Make them stay in sync: editing one input should update the other input with the same text, and vice versa.
export default function SSBC1() {
  const [imText, SetImText] = useState('');

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    SetImText(e.target.value);
  }
  return (
    <>
      <Input label="First input" value={imText} imChange={handleChange} />
      <Input label="Second input" value={imText} imChange={handleChange} />
    </>
  );
}

function Input({ label, value, imChange }: { label: string, value: string, imChange: (e: any) => void}) {

  

  return (
    <label>
      {label}
      {' '}
      <input
        value={value}
        onChange={imChange}
      />
    </label>
  );
}