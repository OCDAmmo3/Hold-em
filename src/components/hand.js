import React from 'react';
import { Route } from 'react-router-dom';

import Deck from '../deck-creator';
import { fullDeckStack } from '../full-deck';
import Home from './home';
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
      <Route exact
        path='/'
        component={Home}
      />
      <Route exact
        path='/player-one'
        render={(props) => <PlayerOne {...props} hand={playerHands.player1} />}
      />
      <Route exact
        path='/player-two'
        render={(props) => <PlayerTwo {...props} hand={playerHands.player2} />}
      />
      <Route exact
        path='/player-three'
        render={(props) => <PlayerThree {...props} hand={playerHands.player3} />}
      />
    </main>
  )
}