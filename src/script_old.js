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