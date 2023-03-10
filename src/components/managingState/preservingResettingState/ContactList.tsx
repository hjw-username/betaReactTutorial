import React from 'react';
import { ContactProps } from './PRS3';

export default function ContactList({
  contacts,
  selectedId,
  onSelect
}: {
  contacts: ContactProps[],
  selectedId: number,
  onSelect: any
}) {
  return (
    <section>
      <ul>
        {contacts.map(contact =>
          <li key={contact.id}>
            <button onClick={() => {
              onSelect(contact.id);
            }}>
              {contact.id === selectedId ?
                <b>{contact.name}</b> :
                contact.name
              }
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}
