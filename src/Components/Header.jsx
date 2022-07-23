import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
        <Link to='/'>
          <h1 className={`${style.logo} ${style.no_print}`}>Carta dei vini Maker</h1>
        </Link>
    </header>
  )
}
