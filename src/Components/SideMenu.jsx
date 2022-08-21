import React from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu() {
  return (
    <aside>
        <Link 
            to='/new'
            className='btn'
        >
        Rosso
        </Link>
    </aside>
  )
}
