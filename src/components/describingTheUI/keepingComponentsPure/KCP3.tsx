import React from 'react';

// The CEO of your company is asking you to add “stories” to your online clock app, and you can’t say no. 
// You’ve written a StoryTray component that accepts a list of stories, followed by a “Create Story” placeholder.

// You implemented the “Create Story” placeholder by pushing one more fake story at the end of the stories array 
// that you receive as a prop. But for some reason, “Create Story” appears more than once. Fix the issue.

interface StoryProps {
  id: string;
  label: string;
}

function someFunc({ stories } : { stories : StoryProps[]}) {
  stories.push({
    id: 'create',
    label: 'Create Story'
  });

  return stories;
}
// 이것도 순수함수 관련인거같은데 렌더링중에 push하지말고 분리하라는거같음
export default function KCP3({ stories } : { stories : StoryProps[]}) {
  return (
    <ul>
      {stories.map(story => (
        <li key={story.id}>
          {story.label}
        </li>
      ))}
    </ul>
  );
}
