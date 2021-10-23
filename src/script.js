// Global vars
const main = document.querySelector('MAIN');
// Objects for LocalStorage
const vino = {};
const listaVini = {};
const cantineVini = {};
const regioniVini = {};
const cartaVini = {
  rossi:regioniVini,
  bianchi:regioniVini,
  rosati:regioniVini,
  spumanti:regioniVini,
  birre:regioniVini,
};


// Helper functions
function spacing(parent, type) {
  const space = document.createElement('DIV');
  space.classList.add(type);
  parent.appendChild(space);
}

// SCELTA TIPOLOGIA VINO -> CREAZIONE REGIONE->CANTINA->VINO
// Selezione elementi DOM
const choiceBtns = document.querySelectorAll('.tipo');
const addRegione = document.querySelector('#new_regione');
const addCantina = document.querySelector('#new_cantina');
const addVino = document.querySelector('#new_vino');

// Event listeners
choiceBtns.forEach(btn => btn.addEventListener("click", (e) => {initForms(e.target.id)}));
// Spicy Event Listeners
addRegione.addEventListener("click", newRegione);

addCantina.addEventListener("click", () => {
  const last = main.lastChild;
  newCantina(last);
});

addVino.addEventListener("click", () => {
  const daddy = main.lastChild.lastChild;
  newVino(daddy);
});

// Funzioni
function initForms(vinoScelto) {
  let ita, eng;
  switch (vinoScelto) {
    case "rosso":
      ita = "vini rossi";
      eng = "red wines";
      break;
    case "bianco":
      ita = "vini bianchi";
      eng = "white wines";
      break;
    case "rosato":
      ita = "vini rosati";
      eng = "rose wines";
      break;
    case "spumante":
      ita = "bollicine";
      eng = "bubbles";
      break;
    case "birra":
      ita = "birre artigianali";
      eng = "craft beer";
      break;
  }
  const opzioni = document.getElementById("scegli_tipo");
  opzioni.remove();
  
  const title = document.createElement('h1');
  title.id = "p_header";
  title.innerHTML = `${ita}<span class="subtitle"> ${eng}</span>`;
  main.appendChild(title);

  newRegione();
}

// CREAZIONE DEGLI INPUT FIELDS
// input nome regione
function newRegione() {
  const regione = document.createElement('DIV');
  regione.classList.add("regione");
  regione.innerHTML = `
      <label for="regione">Regione delle cantine:</label>
      <input type="text" name="regione">
      <button class="del_regione btn-del">ELIMINA REGIONE</button>
    `;

  delItem(regione);

  spacing(main, 'divider');
  main.appendChild(regione);
  spacing(regione, 'divider');

  newCantina(regione);
}

// input nome cantine
function newCantina(parent) {
  const cantina = document.createElement('DIV');
  cantina.classList.add("cantina");
  cantina.innerHTML = `
    <p class="input_cantina">
      <label for="cantina">Cantina:</label>
      <input type="text" name="cantina">
      <button class="del_cantina btn-del">ELIMINA CANTINA</button>
    </p>
  `;

  delItem(cantina);

  parent.appendChild(cantina);

  newVino(cantina);
}

// input vino
function newVino(parent) {
  const vino = document.createElement('DIV');
  vino.classList.add('vino');
  vino.innerHTML = `
    <p class="inputs">
      <label for="anno_tipo">Anno e tipo:</label>
      <input type="text" name="anno_tipo">
    </p>
    <p class="inputs">
      <label for="nome">Nome:</label>
      <input type="text" name="nome">
    </p>
    <p class="inputs">
      <label for="denom">Indicazione:</label>
      <input type="text" name="denom">
    </p>
    <p class="inputs">
      <label for="prezzo">Costo: (in 00,00):</label>
      <input type="text" name="costo">
    </p>
    <button class="del_vino btn-del">ELIMINA VINO</button>
  `;
  
  delItem(vino);

  parent.appendChild(vino);
}

// DELETING THINGS
function delItem(parent) {
  const delBtn = parent.querySelector('BUTTON');
  delBtn.addEventListener("click", () => {parent.remove()});
}

// SAVING AND CREATING PREVIEW
const saveBtn = document.querySelector('#save');

saveBtn.addEventListener("click", save);

function save() {
  const selRegioni = main.querySelectorAll('.regione');

  selRegioni.forEach(regione => {
    saveCantine(regione);
  });
}

function saveCantine(regione) {
  const selCantine = regione.querySelectorAll('.cantina');

  selCantine.forEach(cantina => {
    saveVini(cantina);
  });
}

function saveVini(cantina) {
  const selVini = cantina.querySelectorAll('.vino');
  const vini = {}; 
  let i = 0;
  selVini.forEach(vino => {
    const inputs = vino.querySelectorAll('INPUT');
    const info = {};
    inputs.forEach(inp => {
      info[`${inp.name}`]=`${inp.value}`;
    });
    vini[`vino${i}`] = info;
    i++;
  });
  console.log(vini);
}


initForms("rosso");