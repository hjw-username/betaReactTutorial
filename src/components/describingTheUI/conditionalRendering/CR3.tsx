
// This Drink component uses a series of ? :
//  conditions to show different information depending on whether the name prop is "tea" or "coffee". 
//  The problem is that the information about each drink is spread across multiple conditions.
//  Refactor this code to use a single if statement instead of three ? : conditions.
import React from 'react';

// 왜 if문을 여기에 쓰라는거지 그냥 객체에 tea coffee 쓰면안됨? 스킵ㄱ
function Drink({ name } : { name: string }) {
  return (
    <section>
      <h1>{name}</h1>
      <dl>
        <dt>Part of plant</dt>
        <dd>{name === 'tea' ? 'leaf' : 'bean'}</dd>
        <dt>Caffeine content</dt>
        <dd>{name === 'tea' ? '15–70 mg/cup' : '80–185 mg/cup'}</dd>
        <dt>Age</dt>
        <dd>{name === 'tea' ? '4,000+ years' : '1,000+ years'}</dd>
      </dl>
    </section>
  );
}

export default function CR3() {
  return (
    <div>
      <Drink name="tea" />
      <Drink name="coffee" />
    </div>
  );
}
