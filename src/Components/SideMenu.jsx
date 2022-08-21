import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu() {
  return (
    <aside>
      <Link 
        to='/new'
        className='btn'
      >
        Nuovo
      </Link>
    </aside>
  )
}
