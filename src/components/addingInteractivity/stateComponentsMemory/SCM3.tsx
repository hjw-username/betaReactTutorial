import React from 'react';

import { useState } from 'react';

// Here is a small form that is supposed to let the user leave some feedback. 
// When the feedback is submitted, it’s supposed to display a thank-you message. 
// However, it crashes with an error message saying “Rendered fewer hooks than expected”. 
// Can you spot the mistake and fix it?

// useState가 내부에 선언된게 잘못이잔어
export default function SCM3() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    // eslint-disable-next-line
    
    return (
      <form onSubmit={e => {
        e.preventDefault();
        alert(`Sending: "${message}"`);
        setIsSent(true);
      }}>
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}