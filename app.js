function sortear () {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numero;
    let sorteados = [];
    let quantidadePossivel = ate - de + 1;
    let validacoesOk = validacoes(quantidade, de, ate, quantidadePossivel);


    if (validacoesOk) {
        
        for (let i = 0; i < quantidade; i++) {
            do {
                numero = obterNumeroAleatorio (de, ate);
            } while (sorteados.includes(numero));
            
            sorteados.push(numero);
        }

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;

        let botao = document.getElementById('btn-reiniciar');
        if (botao.classList.contains('container__botao-desabilitado')){
            alterarStatusBotao();
        }
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function validacoes(quantidade, de, ate, quantidadePossivel) {
    if(quantidade <= 0 ){
        alert('Erro: insira uma quantidade válida!');
        reiniciar();
        return false;
    } else if (de > ate) {
        alert('Erro: o número mínimo é maior que o máximo!');
        reiniciar();
       return false;
    } else if (quantidade > quantidadePossivel) {
        alert('Erro: quantidade de elementos excedida!');
        reiniciar();
        return false;
    }
    return true;


}   