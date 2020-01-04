import React from 'react';

export default function Player2(props) {
  return (
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
  )
}