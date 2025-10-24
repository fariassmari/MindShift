const CHAVE_STORAGE = 'mindshift_compromissos'; // <-- ATUALIZADO AQUI

/**
 * Carrega a lista de compromissos salvos no LocalStorage do navegador.
 * @returns {Array} A lista de compromissos ou um array vazio(embaixo explico melhor).
 */

export function getCompromissos() {
    const dadosEmString = localStorage.getItem(CHAVE_STORAGE);
    
    // Se houver dados, converte a string JSON de volta para um array.
    // Se não houver nada, retorna um array vazio para evitar que dê meda.
    return dadosEmString ? JSON.parse(dadosEmString) : [];
}

/**
 * Salva a lista de compromissos no LocalStorage do navegador.
 * @param {Array} compromissos A lista de compromissos a ser salva.
 */

export function saveCompromissos(compromissos) {
    // Converte a array de objetos para uma string no formato JSON,
    // pois o LocalStorage só consegue armazenar texto((trabalho desgraçado)).
    const dadosEmString = JSON.stringify(compromissos);
    localStorage.setItem(CHAVE_STORAGE, dadosEmString);
}
