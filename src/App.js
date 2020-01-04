import React from 'react';
import Header from './components/header';
import DeckStack from './components/deck-stack';
import { Hand } from './components/hand';
import NewDeck from './components/new-deck';

function App() {
  return (
    <>
      <Header/>
      <DeckStack/>
      <Hand/>
      <NewDeck/>
    </>
  );
}

export default App;
