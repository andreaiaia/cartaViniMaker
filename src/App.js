import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header>
          <h1 class="logo no_print">Carta dei vini Maker</h1>
        </header>
        <main>
          <div id="scegli_tipo">
            <h2>Scegli il tipo di vino:</h2>
            <button id="rosso" class="tipo  big-btn">Rosso</button>
            <button id="bianco" class="tipo  big-btn">Bianco</button>
            <button id="rosato" class="tipo  big-btn">Rosato</button>
            <button id="spumante" class="tipo  big-btn">Spumante</button>
            <button id="birra" class="tipo  big-btn">Birra</button>
          </div>
        </main>
        <aside class="buttons no_print">
          <button id="new_regione" class="btn-add big-btn">+ Regione</button>
          <button id="render" class="btn-load big-btn">Render</button>
          <button id="save" class="btn-save big-btn">SALVA</button>
        </aside>
      </body>
    </div>
  );
}

export default App;
