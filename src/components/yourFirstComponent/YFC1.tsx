import React from 'react';

// This sandbox doesn’t work because the root component is not exported:

// export를 해야지 바부야
function YFC1() {
  return (
    <div>
      <img
        src="https://i.imgur.com/lICfvbD.jpg"
        alt="Aklilu Lemma"
      />
    </div>
  );
}

export default YFC1;