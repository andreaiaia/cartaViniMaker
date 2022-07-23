import React from "react";

import style from "./ToolBar.module.css";

export default function ToolBar({ title }) {
  return (
    <div className={style.toolbar}>
      <h2 className={style.title}>{title}</h2>
      <div className={style.finishBtns}>
        <button className={style.btn}>Anteprima</button>
        <button className={`${style.btn} ${style.save}`}>Salva</button>
      </div>
    </div>
  );
}
