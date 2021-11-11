// Global vars
const main = document.querySelector('MAIN');
let chosen;
// Objects for LocalStorage


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
choiceBtns.forEach(btn => btn.addEventListener("click", (e) => {start(e.target.id)}));
// Spicy Event Listeners
addRegione.addEventListener("click", () => {newRegione(null)});

addCantina.addEventListener("click", () => {
  const last = main.lastChild;
  newCantina(last, null);
});

addVino.addEventListener("click", () => {
  const daddy = main.lastChild.lastChild;
  newVino(daddy, null);
});

// Funzioni
function initForms(vinoScelto, obj) {
  chosen = vinoScelto;
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

  newRegione(obj);
}

// CREAZIONE DEGLI INPUT FIELDS
// input nome regione
function newRegione(val) {
  const regione = document.createElement('DIV');
  regione.classList.add("regione");
  const etichetta = makeLabel("regione", "Regione delle cantine:");
  const campo = makeInput("text", "regione", val);
  const btn = makeBtn("del-regione", "ELIMINA REGIONE");

  regione.appendChild(etichetta);
  regione.appendChild(campo);
  regione.appendChild(btn);

  delItem(regione);

  spacing(main, 'divider');
  main.appendChild(regione);
  spacing(regione, 'divider');

  newCantina(regione, val);
}

// input nome cantine
function newCantina(parent, val) {
  const cantina = document.createElement('DIV');
  cantina.classList.add("cantina");
  const p = document.createElement('P');
  p.classList.add("input_cantina");
  const etichetta = makeLabel("cantina", "Cantina:");
  const campo = makeInput("text","cantina", val);
  const btn = makeBtn("del_cantina", "ELIMINA CANTINA");

  p.appendChild(etichetta);
  p.appendChild(campo);
  p.appendChild(btn);
  cantina.appendChild(p);

  delItem(cantina);

  parent.appendChild(cantina);

  newVino(cantina, val);
}

// input vino - questa funzione è orribile e si può fare decisamente meglio
function newVino(parent, val) {
  const vino = document.createElement('DIV');
  vino.classList.add('vino');
  const p1 = document.createElement('P');
  p1.classList.add("inputs");
  const etichetta1 = makeLabel("anno_tipo", "Anno e tipo:");
  const campo1 = makeInput("text", "anno_tipo", val);
  p1.appendChild(etichetta1);
  p1.appendChild(campo1);

  const p2 = document.createElement('P');
  p2.classList.add("inputs");
  const etichetta2 = makeLabel("nome", "Nome:");
  const campo2 = makeInput("text", "nome", val);
  p2.appendChild(etichetta2);
  p2.appendChild(campo2);

  const p3 = document.createElement('P');
  p3.classList.add("inputs");
  const etichetta3 = makeLabel("denom", "Indicazione:");
  const campo3 = makeInput("text", "denom", val);
  p3.appendChild(etichetta3);
  p3.appendChild(campo3);

  const p4 = document.createElement('P');
  p4.classList.add("inputs");
  const etichetta4 = makeLabel("prezzo", "Costo (in 00,00):");
  const campo4 = makeInput("text", "costo", val);
  p4.appendChild(etichetta4);
  p4.appendChild(campo4);

  const btn = makeBtn("del_vino", "ELIMINA VINO");

  vino.appendChild(p1);
  vino.appendChild(p2);
  vino.appendChild(p3);
  vino.appendChild(p4);
  vino.appendChild(btn);
  
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
  const cartaVini = saveRegioni();

  let toSave = JSON.stringify(cartaVini);

  localStorage.setItem(chosen, toSave);

  let toRead = JSON.parse(localStorage.getItem(chosen));
  console.log(toRead);
}

function saveRegioni() {
  const selRegioni = main.querySelectorAll('.regione');
  const regioni = {};
  let i = 0;

  selRegioni.forEach(regione => {
    const input = regione.querySelector('INPUT');
    const info = {};
    info[`${input.name}`] = `${input.val}`;
    info['cantine'] = saveCantine(regione);
    regioni[`regione${i}`] = info;
    i++;
  });

  return regioni;
}

function saveCantine(regione) {
  const selCantine = regione.querySelectorAll('.cantina');
  const cantine = {};
  let i=0;

  selCantine.forEach(cantina => {
    const input = cantina.querySelector('INPUT');
    const info = {};
    info[`${input.name}`] = `${input.val}`;
    info['vini'] = saveVini(cantina);
    cantine[`cantina${i}`] = info;
    i++;
  });

  return cantine;
}

function saveVini(cantina) {
  const selVini = cantina.querySelectorAll('.vino');
  const vini = {}; 
  let i = 0;
  selVini.forEach(vino => {
    const inputs = vino.querySelectorAll('INPUT');
    const info = {};
    inputs.forEach(inp => {
      info[`${inp.name}`]=`${inp.val}`;
    });
    vini[`vino${i}`] = info;
    i++;
  });
  return vini;
}

// Helpers to create DOM elements
function makeLabel(forAtt, description) {
  const etichetta = document.createElement('LABEL');
  etichetta.setAttribute("for",forAtt);
  etichetta.innerHTML = description;
  return etichetta;
}

function makeInput(type, name, val) {
  const campo = document.createElement('INPUT');
  campo.setAttribute("type",type);
  campo.setAttribute("name",name);
  campo.value = val ? val : "";
  return campo;
}

function makeBtn(theClass, innerContent) {
  const btn = document.createElement('BUTTON');
  btn.classList.add(theClass);
  btn.classList.add("btn-del");
  btn.innerHTML = innerContent;
  return btn;
}

// Controlla se ci sono salvataggi precedenti, se sì li carica
function start(menuScelto) {
  if (localStorage.getItem(menuScelto)) {
    initForms(menuScelto, JSON.parse(localStorage.getItem(menuScelto)));
  } else {
    initForms(menuScelto, null);
  }
}

start("rosso");