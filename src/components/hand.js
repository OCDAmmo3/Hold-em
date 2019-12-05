import React from 'react';
import Deck from '../deck-creator';
import { fullDeckStack } from '../full-deck';

export default function Hand(props) {
  let deck = new Deck(fullDeckStack);
  console.log(deck.cards);
  return (
    <div className="hand">
      <ul>
        {
          deck.cards.map(card => (
            <li>
              <img src={card.image} alt={card.name} className={`${card.id} card-image`}/>
            </li>
          ))
        } 
      </ul>   
    </div>
  )
}