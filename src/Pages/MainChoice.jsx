import React from 'react';
import { Link } from 'react-router-dom';

import style from './MainChoice.module.css';

export default function Main() {
  return (
    <main>
      <div id="scegli_tipo">
        <h2>Scegli il tipo di vino:</h2>
        <Link 
          to='/rossi'
          className={`${style.btn} ${style.rosso}`}
        >
          Rosso
        </Link>
        <Link 
          to='/bianchi'
          className={`${style.btn} ${style.bianco}`}
        >
          Bianco
        </Link>
        <Link 
          to='/rosati'
          className={`${style.btn} ${style.rosato}`}
        >
          Rosato
        </Link>
        <Link
          to='/bollicine' 
          className={`${style.btn} ${style.spumante}`}
        >
          Spumante
        </Link>
        <Link
          to='/birre'
          className={`${style.btn} ${style.birra}`}
        >
          Birra
        </Link>
      </div>
    </main>
  )
}
