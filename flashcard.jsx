import React, { useState } from 'react';

export default function Flashcard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <p>{flipped ? card.answer : card.question}</p>
    </div>
  );
}
