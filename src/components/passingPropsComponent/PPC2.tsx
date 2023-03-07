import React from 'react';
import { getImageUrl2 } from './utils';

// In this example, Avatar receives a numeric size prop which determines the <img> width and height. 
// The size prop is set to 40 in this example. 
// However, if you open the image in a new tab, 
// you’ll notice that the image itself is larger (160 pixels). 
// The real image size is determined by which thumbnail size you’re requesting.

// Change the Avatar component to request the closest image size based on the size prop. 
// Specifically, if the size is less than 90, pass 's' (“small”) rather than 'b' (“big”) to the getImageUrl function. 
// Verify that your changes work by rendering avatars with different values of the size prop and opening images in a new tab.

interface Person {
  name: string,
  imageId: string,
}

function Avatar({ person, size } : {person: Person, size: number}) {
  let thumbnailSize = size < 90 ? 's' : 'b';

  return (
    <img
      className="avatar"
      src={getImageUrl2(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function PPC2() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}