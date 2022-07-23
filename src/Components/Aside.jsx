import React from "react";

import style from "./Aside.module.css";

export default function Aside() {
  return (
    <aside className='buttons no_print'>
      <button className={style.btn}>+ Regione</button>
      <button className={`${style.btn} ${style.load}`}>Render</button>
      <button className={`${style.btn} ${style.save}`}>SALVA</button>
    </aside>
  );
}
