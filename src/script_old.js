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
  <div id="p_header">
    <p class="title">vini ${tipo}<span class="subtitle"> ${tipo_en} wine</span></p>
    <p class="region">${regione}</p>
  </div>
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
  for (k_c; k_c <= i_c; k_c++) {
    makeCantina(k_c);
  }
}

function makeCantina(n) {
  const lista = document.querySelector('.lista');

  const nome_cantina = document.getElementById(`nome_cantina_${n}`).value;

  if (nome_cantina != null) {
    const cantina = document.createElement('P');
    cantina.innerText = nome_cantina;
    cantina.className = 'cantina';
  
    const vini_cantina = document.createElement('DIV');
    vini_cantina.classList.add('vini');
    
    const in_cantina = document.querySelectorAll(`.n_${n}`);
    in_cantina.forEach((vino) => {
      console.log(vino);
      const nuovo = makeVino(vino);
      const p = vino.querySelector('.in_prezzo').value;
      const prezzo = document.createElement('P');
      prezzo.classList.add('price');
      prezzo.innerText = `€ ${p}`;
  
      vini_cantina.appendChild(nuovo);
      vini_cantina.appendChild(prezzo);
    });
  
    lista.appendChild(cantina);
    lista.appendChild(vini_cantina);
  }
}

function makeVino(vino) {
  const tipo = vino.querySelector('.in_tipo').value;
  const nome = vino.querySelector('.in_nome').value;
  const indic = vino.querySelector('.in_indic').value;

  const nuovo = document.createElement('DIV');
  nuovo.classList.add('vino');
  nuovo.innerHTML = `
    <p class="tipo">${tipo}</p>
    <span> - </span>
    <p class="nome">${nome}</p>
    <p class="denom">${indic}</p>
  `;

  return nuovo;
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
    <button type="button" class="btn-del c_${i_c}" onclick="delCantina(this)">x</button>
  </div>
  <div class="nuovo_vino v_${i_c}">
    <p>
      <label for="tipo_${i_c}_${i_v}">Anno e tipo:</label>
      <input type="text" id="tipo_${i_c}_${i_v}" class="in_tipo">
    </p>
    <p>
      <label for="nome_vino_${i_c}_${i_v}">Nome:</label>
      <input type="text" id="nome_vino_${i_c}_${i_v}" class="in_nome">
    </p>
    <p>
      <label for="indic_${i_c}_${i_v}">Indicazione:</label>
      <input type="text" id="indic_${i_c}_${i_v}" class="in_indic">
    </p>
    <p>
      <label for="prezzo_${i_c}_${i_v}">Prezzo (scrivilo nella forma xx,xx)</label>
      <input type="text" id="prezzo_${i_c}_${i_v}" class="in_prezzo">
    </p>
  </div>
  `;
  form.appendChild(cantina);
}

function addVino() {
  i_v++;
  const cantina = document.querySelector(`.c_${i_c}`);
  const vino = document.createElement('DIV');
  vino.classList.add("nuovo_vino");
  vino.classList.add(`v_${i_v}`);
  vino.classList.add(`n_${i_c}`);
  vino.innerHTML = `
  <button type="button" class="btn-del v_${i_v}" onclick="delVino(this)">x</button>
  <p>
    <label for="tipo_${i_c}_${i_v}">Anno e tipo:</label>
    <input type="text" id="tipo_${i_c}_${i_v}" class="in_tipo">
  </p>
  <p>
    <label for="nome_vino_${i_c}_${i_v}">Nome:</label>
    <input type="text" id="nome_vino_${i_c}_${i_v}" class="in_nome">
  </p>
  <p>
    <label for="indic_${i_c}_${i_v}">Indicazione:</label>
    <input type="text" id="indic_${i_c}_${i_v}" class="in_indic">
  </p>
  <p>
    <label for="prezzo_${i_c}_${i_v}">Prezzo (scrivilo nella forma xx,xx)</label>
    <input type="text" id="prezzo_${i_c}_${i_v}" class="in_prezzo">
  </p>
  <div class="spacing"></div>
  `;
  cantina.appendChild(vino);
}

function delCantina(item) {
  const to_kill = document.querySelector(`.${item.classList[1]}`);
  to_kill.remove();
}

function delVino(item) {
  const to_kill = document.querySelector(`.${item.classList[1]}`);
  to_kill.remove();
}