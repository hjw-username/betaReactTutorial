import React from 'react';

import { useState } from 'react';

// This form lets you enter first and last name. 
// It also has a checkbox controlling which field goes first. 
// When you tick the checkbox, the “Last name” field will appear before the “First name” field.

// It almost works, but there is a bug. 
// If you fill in the “First name” input and tick the checkbox, 
// the text will stay in the first input (which is now “Last name”). 
// Fix it so that the input text also moves when you reverse the order.

export default function PRS2() {
  const [reverse, setReverse] = useState(false);
  let checkbox = (
    <label>
      <input
        type="checkbox"
        checked={reverse}
        onChange={e => setReverse(e.target.checked)}
      />
      Reverse order
    </label>
  );
  if (reverse) {
    return (
      <>
        <Field key="last" label="Last name" /> 
        <Field key="first" label="First name" />
        {checkbox}
      </>
    );
  } else {
    return (
      <>
        <Field key="first"  label="First name" /> 
        <Field key="last" label="Last name" />
        {checkbox}
      </>
    );    
  }
}

function Field({ label }: {label : string}) {
  const [text, setText] = useState('');
  return (
    <label>
      {label}:{' '}
      <input
        type="text"
        value={text}
        placeholder={label}
        onChange={e => setText(e.target.value)}
      />
    </label>
  );
}
