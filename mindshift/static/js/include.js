// static/js/includeBase.js
async function incluirBase() {
  try {
    const resposta = await fetch('base.html');
    const htmlBase = await resposta.text();

    // cria um container temporário
    const temp = document.createElement('div');
    temp.innerHTML = htmlBase;
  }
};

incluirBase();