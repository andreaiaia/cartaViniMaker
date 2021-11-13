// Global vars
const main = document.querySelector('MAIN');
let chosen;

// Helper functions
function spacing(parent, type) {
  const space = document.createElement('DIV');
  space.classList.add(type);
  parent.appendChild(space);
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

// SCELTA TIPOLOGIA VINO -> CREAZIONE REGIONE->CANTINA->VINO
// Selezione elementi DOM
const choiceBtns = document.querySelectorAll('.tipo');
const addRegione = document.querySelector('#new_regione');
const addCantina = document.querySelector('#new_cantina');
const addVino = document.querySelector('#new_vino');
const renderBtn = document.querySelector("#render");

// Event listeners
choiceBtns.forEach(btn => btn.addEventListener("click", (e) => {
  start(e.target.id);
}));
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

renderBtn.addEventListener("click", () => {
  save(); //auto saves, then renders
  render();
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
}

// CREAZIONE DEGLI INPUT FIELDS
// input nome regione
function newRegione(obj) {
  const regione = document.createElement('DIV');
  regione.classList.add("regione");
  spacing(regione, 'divider');
  const etichetta = makeLabel("regione", "Regione delle cantine:");
  const campo = makeInput("text", "regione", obj ? obj["regione"] : "");
  const btn = makeBtn("del-regione", "ELIMINA REGIONE");

  regione.appendChild(etichetta);
  regione.appendChild(campo);
  regione.appendChild(btn);

  delItem(regione);

  spacing(regione, 'divider');
  main.appendChild(regione);

  if (obj) {
    for (let key in obj) {
      if (key != "regione") newCantina(regione, obj[key]);
    }
  } else {
    newCantina(regione, obj);
  }
}

// input nome cantine
function newCantina(parent, obj) {
  const cantina = document.createElement('DIV');
  cantina.classList.add("cantina");
  const p = document.createElement('P');
  p.classList.add("input_cantina");
  const etichetta = makeLabel("cantina", "Cantina:");
  const campo = makeInput("text","cantina", obj ? obj["cantina"] : "");
  const btn = makeBtn("del_cantina", "ELIMINA CANTINA");

  p.appendChild(etichetta);
  p.appendChild(campo);
  p.appendChild(btn);
  cantina.appendChild(p);

  delItem(cantina);

  parent.appendChild(cantina);

  if (obj) {
    for (let key in obj) {
      if (key != "cantina") newVino(cantina, obj[key]);
    }
  } else {
    newVino(cantina, obj);
  }
}

// input vino - questa funzione è orribile e si può fare decisamente meglio
function newVino(parent, obj) {
  const vino = document.createElement('DIV');
  vino.classList.add('vino');
  const p1 = document.createElement('P');
  p1.classList.add("inputs");
  const etichetta1 = makeLabel("anno_tipo", "Anno e tipo:");
  const campo1 = makeInput("text", "anno_tipo", obj ? obj["anno_tipo"] : "");
  p1.appendChild(etichetta1);
  p1.appendChild(campo1);

  const p2 = document.createElement('P');
  p2.classList.add("inputs");
  const etichetta2 = makeLabel("nome", "Nome:");
  const campo2 = makeInput("text", "nome", obj ? obj["nome"] : "");
  p2.appendChild(etichetta2);
  p2.appendChild(campo2);

  const p3 = document.createElement('P');
  p3.classList.add("inputs");
  const etichetta3 = makeLabel("denom", "Indicazione:");
  const campo3 = makeInput("text", "denom", obj ? obj["denom"] : "");
  p3.appendChild(etichetta3);
  p3.appendChild(campo3);

  const p4 = document.createElement('P');
  p4.classList.add("inputs");
  const etichetta4 = makeLabel("prezzo", "Costo (in 00,00):");
  const campo4 = makeInput("text", "costo", obj ? obj["costo"] : "");
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
    info[`${input.name}`] = `${input.value}`;

    const selCantine = regione.querySelectorAll('.cantina');
    let j = 0;
    selCantine.forEach(cantina => {
      info[`cantina${j}`] = saveCantina(cantina);
      j++;
    });
  
    regioni[`regione${i}`] = info;
    i++;
  });

  return regioni;
}

function saveCantina(cantina) {
  const input = cantina.querySelector('INPUT');
  const info = {};
  info[`${input.name}`] = `${input.value}`;

  const selVini = cantina.querySelectorAll('.vino');
  let i = 0;
  selVini.forEach(vino => {
    info[`vino${i}`] = saveVino(vino);
    i++;
  });

  return info;
}

function saveVino(vino) {
  const info = {};

  const inputs = vino.querySelectorAll('INPUT');
  inputs.forEach(inp => {
    info[`${inp.name}`]=`${inp.value}`;
  });

  return info;
}

// Controlla se ci sono salvataggi precedenti, se sì li carica
function start(menuScelto) {
  chosen = menuScelto;
  initForms(menuScelto);
  if (localStorage.getItem(menuScelto)) {
    const parsedMenu = JSON.parse(localStorage.getItem(menuScelto));
    // chiamo newRegione per ogni regione
    for (let key in parsedMenu) {
      newRegione(parsedMenu[key]);
    }
  } else {
    newRegione(null);
  }
}

// RENDER FUNCTIONS
function render() {
  const regioni = document.querySelectorAll(".regione");
  regioni.forEach(regione => {
    regione.style.display = "none";
  });

  const parsedMenu = JSON.parse(localStorage.getItem(chosen));
  for (let key in parsedMenu) {
    renderRegione(parsedMenu[key]);
  }
}

function renderRegione(obj) {
  const nome = document.createElement('H2');
  nome.classList.add('region_name');
  nome.innerHTML = obj["regione"];
  main.appendChild(nome);

  for (let key in obj) {
    if (key != 'regione') renderCantina(obj[key]);
  }
}

function renderCantina(obj) {
  const cont_cantina = document.createElement('DIV');
  cont_cantina.classList.add('rd_cont_cantina');

  const nome = document.createElement('P');
  nome.classList.add('rd_cantina');
  nome.innerHTML = obj["cantina"];
  cont_cantina.appendChild(nome);

  const vini = document.createElement('DIV');
  vini.classList.add('rd_vini');

  for (let key in obj) {
    if (key != 'cantina') renderVini(obj[key], vini);
  }

  cont_cantina.appendChild(vini);
  main.appendChild(cont_cantina);
}

function renderVini(obj, parent) {
  const gruppo = document.createElement('DIV');
  gruppo.classList.add('rd_gruppo');
  const anno_tipo = document.createElement('P');
  anno_tipo.classList.add('rd_anno_tipo');
  anno_tipo.innerHTML = obj["anno_tipo"] + ' -';
  gruppo.appendChild(anno_tipo);

  const nome = document.createElement('P');
  nome.classList.add('rd_nome');
  nome.innerHTML = obj["nome"];
  gruppo.appendChild(nome);

  const denom = document.createElement('P');
  denom.classList.add('rd_denom');
  denom.innerHTML = obj["denom"];
  gruppo.appendChild(denom);

  parent.appendChild(gruppo);

  const costo = document.createElement('P');
  costo.classList.add('rd_costo');
  costo.innerHTML = obj["costo"] + "€";
  parent.appendChild(costo);
}
