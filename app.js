function sortear () {
    let quantidade = document.getElementById('quantidade').value;
    let de = document.getElementById('de').value;
    let ate = document.getElementById('ate').value;

    let numero;
    
    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio (de, ate);
        sorteados.push(numero)
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}