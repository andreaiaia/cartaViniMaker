import React from 'react';
import './Main.css';

export default function Main({ choiceHandler }) {
  

  return (
    <main>
        <div id="scegli_tipo">
            <h2>Scegli il tipo di vino:</h2>
            <button onClick={() => choiceHandler('rosso')} className="rosso">Rosso</button>
            <button onClick={() => choiceHandler('bianco')} className="bianco">Bianco</button>
            <button onClick={() => choiceHandler('rosato')} className="rosato">Rosato</button>
            <button onClick={() => choiceHandler('spumante')} className="spumante">Spumante</button>
            <button onClick={() => choiceHandler('birra')} className="birra">Birra</button>
        </div>
    </main>
  )
}
