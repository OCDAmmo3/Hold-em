import React from 'react';
import Header from './components/header';
import DeckStack from './components/deck-stack';
import { Hand } from './components/hand';

function App() {
  return (
    <>
      <Header/>
      <DeckStack/>
      <Hand/>
    </>
  );
}

export default App;
