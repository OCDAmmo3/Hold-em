import React from 'react';
import { Link } from 'react-router-dom';

export default function Player2(props) {
  return (
    <>
      <h2>Player 2</h2>
      <div className='player-two hand'>
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
      <h4><Link to='/player-three' className='next-button'>Next Player</Link></h4>
    </>
  )
}