import React from 'react';
import { Link } from 'react-router-dom';

export default function Player3(props) {
  return (
    <>
      <h2>Player 3</h2>
      <div className='player-three hand'>
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
      <h4><Link to='/player-one' className='next-button'>Next Player</Link></h4>
    </>
  )
}