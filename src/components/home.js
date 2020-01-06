import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <nav>
        <ul className='navigation'>
          <li> <Link to='/player-one' className='next-button'>Deal Hand</Link></li>
        </ul>
      </nav>
    </>
  )
}