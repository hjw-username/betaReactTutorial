import React from 'react';
import { PlaceProps } from './data';

export function getImageUrl(place: PlaceProps) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}
