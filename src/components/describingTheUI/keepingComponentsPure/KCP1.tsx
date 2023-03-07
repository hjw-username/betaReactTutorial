import React from 'react';

// This component tries to set the <h1>’s CSS class to "night" 
// during the time from midnight to six hours in the morning, and "day" at all other times. 
// However, it doesn’t work. Can you fix this component?

// You can verify whether your solution works by temporarily changing the computer’s timezone.
//  When the current time is between midnight and six in the morning, the clock should have inverted colors!
export default function KCP1({ time } : { time : Date}) {
  let hours = time.getHours();
  let timeClass = 'day';
  if (hours >= 0 && hours <= 6) {
    timeClass  = 'night';
  } else {
    timeClass = 'day';
  }
  return (
    <h1 className={timeClass}>
      {time.toLocaleTimeString()}
    </h1>
  );
}
