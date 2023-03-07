import React from 'react';

// This example renders a famous haiku by Katsushika Hokusai, with each line wrapped in a <p> tag.
//  Your job is to insert an <hr /> separator between each paragraph.
//   Your resulting structure should look like this:

// <article>
//   <p>I write, erase, rewrite</p>
//   <hr />
//   <p>Erase again, and then</p>
//   <hr />
//   <p>A poppy blooms.</p>
// </article>
// A haiku only contains three lines, but your solution should work with any number of lines.
//  Note that <hr /> elements only appear between the <p> elements, not in the beginning or the end!

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
};

export default function RL4() {
  return (
    <article>
      {poem.lines.map((line, index) =>
        <p key={index}>
          {line}
          {index + 1 !== poem.lines.length && <hr />}
        </p>
      )}
    </article>
  );
}
