// Global vars
const main = document.querySelector('MAIN');

// Helper functions
function spacing(parent, type) {
  const space = document.createElement('DIV');
  space.classList.add(type);
  parent.appendChild(space);
}

// SCELTA TIPOLOGIA VINO
// Selezione elementi DOM
const choiceBtns = document.querySelectorAll('.tipo');

// Event listeners
choiceBtns.forEach(btn => btn.addEventListener("click", (e) => {initForms(e.target.id)}));

// Funzioni
function initForms(vinoScelto) {
  let vino_it, vino_en;
  switch (vinoScelto) {
    case "rosso_red":
      vino_it = "rossi";
      vino_en = "red";
      break;
    case "bianco_white":
      vino_it = "bianchi";
      vino_en = "white";
      break;
    case "rosato_rose":
      vino_it = "rosati";
      vino_en = "rose";
      break;
  }
  const opzioni = document.getElementById("scegli_tipo");
  opzioni.remove();
  
  const title = document.createElement('h1');
  title.id = "p_header";
  title.innerHTML = `vini ${vino_it}<span class="subtitle"> ${vino_en} wine</span>`;
  main.appendChild(title);
  spacing(main, 'divider');

  newRegione();
}

// CREAZIONE DEGLI INPUT FIELDS
// input nome regione
function newRegione() {
  const regione = document.createElement('DIV');
  regione.classList.add("regione");
  regione.innerHTML = `
      <label for="regione">Regione delle cantine:</label>
      <input type="text" name="regione">`;

  main.appendChild(regione);
  spacing(regione, 'divider');

  newCantina(regione);
}

// input nome cantine
function newCantina(parent) {
  const cantina = document.createElement('DIV');
  cantina.classList.add("cantina");
  cantina.innerHTML = `
    <label for="cantina">Cantina:</label>
    <input type="text" name="cantina">`;

  parent.appendChild(cantina);
  spacing(parent, 'spacing');

  newVino(cantina);
}

// input vino
function newVino(parent) {
  const vino = document.createElement('DIV');
  vino.classList.add('vino');
  vino.innerHTML = `
    <p>
      <label for="anno_tipo">Anno e tipo:</label>
      <input type="text" name="anno_tipo">
    </p>
    <p>
      <label for="nome">Nome:</label>
      <input type="text" name="nome">
    </p>
    <p>
      <label for="denom">Indicazione:</label>
      <input type="text" name="denom">
    </p>
    <p>
      <label for="prezzo">Costo: (in 00,00):</label>
      <input type="text" name="costo">
    </p>
  `;

  parent.appendChild(vino);
}

initForms("rosso_red");