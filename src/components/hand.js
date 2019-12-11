import React from 'react';
import Deck from '../deck-creator';
import { fullDeckStack } from '../full-deck';
import PlayerOne from './player-hands/player1';
import PlayerTwo from './player-hands/player2';
import PlayerThree from './player-hands/player3';

export function Hand(props) {
  let deck = new Deck(fullDeckStack);
  let dealtHand = deck.dealHand();
  let playerHands = {
    player1: dealtHand.player1Hand,
    player2: dealtHand.player2Hand,
    player3: dealtHand.player3Hand,
  }
  return (
    <main>
      <Route exact path='/player-one' component={PlayerOne} />
      <Route exact path='/player-two' component={PlayerTwo} />
      <Route exact path='/player-three' component={PlayerThree} />
      <Route render={
        () => <h1>Not Found</h1>
      } />
    </main>
  )
}