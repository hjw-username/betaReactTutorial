import React from 'react';
import {useState} from 'react';
import { ContactProps } from './ESLR1';

export default function Chat({contact, message, dispatch}
  : {contact: ContactProps, message: string, dispatch: any}) {
  return (
    <section className="chat">
      <textarea
        value={message}
        placeholder={'Chat to ' + contact.name}
        onChange={(e) => {
          // TODO: dispatch edited_message
          dispatch({
            type: 'edited_message',
            message: e.target.value,
          });
          // (Read the input value from e.target.value)
        }}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
