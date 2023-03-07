import { People } from "./data";

export function getImageUrl(person : People) {
  return (
    'https://i.imgur.com/' +
    person.imageId +
    's.jpg'
  );
}
