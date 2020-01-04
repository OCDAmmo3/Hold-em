import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <nav>
        <ul>
          <li> <Link to='/player-one'>Deal Hand</Link></li>
        </ul>
      </nav>
    </>
  )
}