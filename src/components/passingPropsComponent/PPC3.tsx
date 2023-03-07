import React, { Children } from 'react';

// Extract a Card component from the markup below, and use the children prop to pass different JSX to it:

// 중복되는 div 들을 Card Component로 묶고 그것들을 children prop 로 처리하세요 라는뜻
function Card({ children } : { children: React.ReactNode}) {
  return (
    <div className="card">
      <div className="card-content">
          {children}
      </div>
    </div>
  )
}

export default function PPC3() {
  return (
    <div>
      <Card>
        <h1>Photo</h1>
        <img
          className="avatar"
          src="https://i.imgur.com/OKS67lhm.jpg"
          alt="Aklilu Lemma"
          width={70}
          height={70}
        />
      </Card>
      <Card>
        <h1>About</h1>
        <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
     </Card>
    </div>
  );
}