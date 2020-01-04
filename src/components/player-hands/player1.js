import React from 'react';
import { Link } from 'react-router-dom';

export default function Player1(props) {
  return (
    <>
      <h2>Player 1</h2>
      <div className='player-one hand'>
        <ul>
          {
            props.hand.map(card => (
              <li key={card.id}>
                <img src={card.image} alt={card.name} className={`${card.id} card-image`} />
                <h6>{card.name}</h6>
              </li>
            ))
          }
        </ul>
      </div>
      <h4><Link to='/player-two'>Next Player</Link></h4>
    </>
  )
}