import React from 'react';
import style from './Header.module.css';

export default function Header() {
  return (
    <header className={style.header}>
        <h1 className={`${style.logo} ${style.no_print}`}>Carta dei vini Maker</h1>
    </header>
  )
}
