import React from 'react';
import Congrats from './components/congrats/Congrats';
import GuessedWord from './components/guessedWord/GuessedWord';
import Input from './components/input/input';

function App() {
  // TODO: get props from shared state
  const secretWord = 'party';
  const success = false;
  const guessedWords = [];

  console.log(React.version );
  return (
    <div data-test="component-app" className="container">
      <h1>McGregor's Guess Word</h1>
      <Congrats success={success}/>
      <Input success={success} secretWord={secretWord}/>
      <GuessedWord guessWords={guessedWords}/>
    </div>
  );
}
// {guessedWord:'train', letterMatchCount:3}
export default App;
