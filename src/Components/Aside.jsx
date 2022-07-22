import React from 'react';
import './Aside.css';

export default function Aside() {
  return (
    <aside className="buttons no_print">
        <button id="new_regione" className="btn-add">+ Regione</button>
        <button id="render" className="btn-load">Render</button>
        <button id="save" className="btn-save">SALVA</button>
    </aside>
  )
}
