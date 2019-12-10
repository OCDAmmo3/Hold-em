import React from 'react';
import Deck from '../deck-creator';
import { fullDeckStack } from '../full-deck';

export default function Hand(props) {
  let deck = new Deck(fullDeckStack);
  let dealtHand = deck.dealHand();
  return (
    <>
      <div className="hand">
        <ul>
          {
            dealtHand.player1Hand.map(card => {
              try {
                return (
                <li key={card.id}>
                  <img src={card.image} alt={card.name} className={`${card.id} card-image`}/>
                </li>
              )
              } catch(error) {
                return (
                  <h1 key="error">Error</h1>
                )
              }
            })
          } 
        </ul> 
      </div>
      <div className="hand">
        <ul>
          {
            dealtHand.player2Hand.map(card => {
              try {
                return (
                <li key={card.id}>
                  <img src={card.image} alt={card.name} className={`${card.id} card-image`}/>
                </li>
              )
              } catch(error) {
                return (
                  <h1 key="error">Error</h1>
                )
              }
            })
          } 
        </ul> 
      </div>
      <div className="hand">
        <ul>
          {
            dealtHand.player3Hand.map(card => {
              try {
                return (
                <li key={card.id}>
                  <img src={card.image} alt={card.name} className={`${card.id} card-image`}/>
                </li>
              )
              } catch(error) {
                return (
                  <h1 key="error">Error</h1>
                )
              }
            })
          } 
        </ul> 
      </div>
    </>
  )
}