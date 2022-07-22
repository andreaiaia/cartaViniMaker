import React from 'react';
import style from './MainChoice.module.css';

export default function Main({ choiceHandler }) {
  return (
    <main>
        <div id="scegli_tipo">
            <h2>Scegli il tipo di vino:</h2>
            <button 
              onClick={() => choiceHandler('rosso')} 
              className={`${style.btn} ${style.rosso}`}
            >
              Rosso
            </button>
            <button 
              onClick={() => choiceHandler('bianco')} 
              className={`${style.btn} ${style.bianco}`}
            >
              Bianco
            </button>
            <button 
              onClick={() => choiceHandler('rosato')} 
              className={`${style.btn} ${style.rosato}`}
            >
              Rosato
            </button>
            <button 
              onClick={() => choiceHandler('spumante')} 
              className={`${style.btn} ${style.spumante}`}
            >
              Spumante
            </button>
            <button 
              onClick={() => choiceHandler('birra')} 
              className={`${style.btn} ${style.birra}`}
            >
              Birra
            </button>
        </div>
    </main>
  )
}
