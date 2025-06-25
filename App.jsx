import React, { useState } from 'react';
import Flashcard from './components/flashcard';
import './App.css';

function App() {
  const cards = [
    {
      question: "Which singer's real name is Robyn Fenty?",
      answer: "Rihanna"
    },
    {
      question: "Who played the character 'Jack' in Titanic?",
      answer: "Leonardo DiCaprio"
    },
    {
      question: "Which celebrity is known for the phrase 'That's hot'?",
      answer: "Paris Hilton"
    },
    {
      question: "Which lead male protagonist starred in 'Divergent' ?",
      answer: "Theo James"
    },
    {
      question: "Who starred in 'Mission: Impossible' and does his own stunts?",
      answer: "Tom Cruise"
    },
    {
      question: "Who is the only Kardashian without kids?",
      answer: "Kendall Jenner"
    },
    {
      question: "What was the name of Prince William and Princess Kate's first baby?",
      answer: "George"
    },
    {
      question: "Who was the first member to leave One Direction?",
      answer: "Zayn Malik"
    },
    {
      question: "What talk show host was known for Carpool Karaoke?",
      answer: "James Corden"
    },
    {
      question: "Who voices Princess Fiona in Shrek?",
      answer: "Cameron Diaz"
    }
  ];

  const [index, setIndex] = useState(0);
  const [guess, setGuess] = useState('');

  function nextCard() {
    const newIndex = Math.floor(Math.random() * cards.length);
    setIndex(newIndex);
    setGuess('');
  }

  function prevCard() {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setGuess('');
  }

  function forwardCard() {
    setIndex((prev) => (prev + 1) % cards.length);
    setGuess('');
  }

  function handleSubmit() {
    alert(
      guess.trim().toLowerCase() === cards[index].answer.toLowerCase()
        ? 'Correct!'
        : `Oops! The correct answer was: ${cards[index].answer}`
    );
  }

  return (
    <div className="container">
      <h1 className="header">Celebrity Flashcards</h1>

      <div className="info-box">
        <p>How well do you know your celebs? Tap to Quiz yourself!</p>
        <p>Number of cards: {cards.length}</p>
      </div>

      <Flashcard card={cards[index]} />

      <div className="guess-box">
        <label htmlFor="guess" className="guess-label">Guess the answer here:</label>

        <input
          id="guess"
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Type your guess..."
        />
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Guess
        </button>
      </div>

      <div className="button-group">
        <button className="arrow-btn" onClick={prevCard}>←</button>
        <button className="arrow-btn" onClick={forwardCard}>→</button>
        <button className="shuffle-btn" onClick={nextCard}>
          Shuffle Cards
        </button>
      </div>
    </div>
  );
}

export default App;
