import React from 'react';
import Gallery from './IecGallery';
import { Profile } from './IecProfile';

// Currently, Gallery.js exports both Profile and Gallery, which is a bit confusing.

// Move the Profile component to its own Profile.js, 
// and then change the App component to render both <Profile /> and <Gallery /> one after another.

// You may use either a default or a named export for Profile,
//  but make sure that you use the corresponding import syntax in both App.js and Gallery.js!
//  You can refer to the table from the deep dive above:

// 그냥 컴포넌트좀 이동 하라는거 export / exports default 사용하던 마음대로
// profile 이후 gallery 컴포넌트를 렌더링해라 라는군
function IEC1() {
  return (
    <div>
      <Profile />
      <Gallery />
    </div>
  );
}

export default IEC1;