import React from 'react';
import {useReducer} from 'react';
import Chat from './Chat';
import ContactList from './ContactList';
import {initialState, messengerReducer} from './messengerReducer';

export default function ESLR1() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);

  if(!contact) {
    throw Error(`contact undefined requestedId: ${state.selectedId} ${state.message}`)
  }
  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

export interface ContactProps {
  id: number;
  name: string;
  email: string;
}

const contacts: ContactProps[] = [
  {id: 0, name: 'Taylor', email: 'taylor@mail.com'},
  {id: 1, name: 'Alice', email: 'alice@mail.com'},
  {id: 2, name: 'Bob', email: 'bob@mail.com'},
];
