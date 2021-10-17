const form = document.querySelector('FORM');
const contatore_cantina = document.querySelector('.c_cantina');
const contatore_vino = document.querySelector('.c_vino');
const main = document.querySelector('MAIN');
let i_c = contatore_cantina.innerText;
let i_v = contatore_vino.innerText;

/* RENDERING */
function render() {
  const editing = document.querySelector('#editing');
  editing.style.display = "none";

  makeTop();
  makeLista();
  makeTutto();
}

function makeTop() {
  const tipo = document.getElementById("t_vino").value;
  const tipo_en = document.getElementById("en_t_vino").value;
  const regione = document.getElementById("regione").value;

  const intestazione = document.createElement('DIV');
  intestazione.classList.add('intestazione');
  intestazione.innerHTML = `
  <p class="title">vini ${tipo}<span class="subtitle"> ${tipo_en} wine</span></p>
  <p class="region">${regione}</p>
  `;
  main.appendChild(intestazione);
}

function makeLista() {
  const lista = document.createElement('DIV');
  lista.classList.add('lista');
  main.appendChild(lista);
}

function makeTutto() {
  let k_c = 0;
  for (k_c; k_c < i_c; k_c++) {
    makeCantina(k_c);
  }
}

function makeCantina(n) {
  const lista = document.querySelector('.lista');

  nome_cantina = document.getElementById(`nome_cantina_${n}`).value;
  const cantina = document.createElement('P');
  cantina.innerText = nome_cantina;
  cantina.className = 'cantina';

  const vini = document.createElement('DIV');
  vini.className = `vini_${n}`;
  


  lista.appendChild(cantina);
  lista.appendChild(vini);
}

function makeVino(infoVino) {
  const vini = document.querySelectorAll('.vini');
}

/* INPUT MANAGEMENT */
function addCantina() {
  i_c++; 
  i_v = 0;
  const cantina = document.createElement('DIV');
  cantina.className = "nuova_cantina";
  cantina.className = `c_${i_c}`;
  cantina.innerHTML = `
  <div class="spacing">
    <label for="nome_cantina_${i_c}" class="standout">Inserisci nome della cantina:</label>
    <input type="text" id="nome_cantina_${i_c}">
  </div>
  <div class="nuovo_vino">
    <p>
      <label for="tipo_${i_c}_${i_v}">Anno e tipo:</label>
      <input type="text" id="tipo_${i_c}_${i_v}">
    </p>
    <p>
      <label for="nome_vino_${i_c}_${i_v}">Nome:</label>
      <input type="text" id="nome_vino_${i_c}_${i_v}">
    </p>
    <p>
      <label for="indic_${i_c}_${i_v}">Indicazione:</label>
      <input type="text" id="indic_${i_c}_${i_v}"">
    </p>
    <p>
      <label for="prezzo_${i_c}_${i_v}">Prezzo (scrivilo nella forma xx,xx)</label>
      <input type="text" id="prezzo_${i_c}_${i_v}">
    </p>
  </div>
  `;
  form.appendChild(cantina);
}

function addVino() {
  i_v++;
  const cantina = document.querySelector(`.c_${i_c}`);
  const vino = document.createElement('DIV');
  vino.className = "nuovo_vino";
  vino.innerHTML = `
  <p>
    <label for="tipo__${i_c}_${i_v}">Anno e tipo:</label>
    <input type="text" id="tipo__${i_c}_${i_v}">
  </p>
  <p>
    <label for="nome_vino__${i_c}_${i_v}">Nome:</label>
    <input type="text" id="nome_vino__${i_c}_${i_v}">
  </p>
  <p>
    <label for="indic__${i_c}_${i_v}">Indicazione:</label>
    <input type="text" id="indic__${i_c}_${i_v}">
  </p>
  <p>
    <label for="prezzo__${i_c}_${i_v}">Prezzo (scrivilo nella forma xx,xx)</label>
    <input type="text" id="prezzo__${i_c}_${i_v}">
  </p>
  <div class="spacing"></div>
  `;
  cantina.appendChild(vino);
}