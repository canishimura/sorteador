function validarInputs(quantidade, de, ate) {
    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert('Erro: Por favor, preencha todos os campos com números válidos!');
        return false;
    }

    if (de >= ate) {
        alert('Erro: O número inicial deve ser menor que o número final!');
        return false;
    }

    const totalNumerosPossiveis = ate - de + 1;
    if (quantidade > totalNumerosPossiveis) {
        alert('Erro: A quantidade de números a sortear é maior que o intervalo disponível!');
        return false;
    }

    return true;
}

function alterarStatusBotao(habilitar) {
    const botao = document.getElementById('btn-reiniciar');
    if (habilitar) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
        botao.disabled = false;
    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
        botao.disabled = true;
    }
}

function sortear() {
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    if (!validarInputs(quantidade, de, ate)) {
        return;
    }

    const numerosPossiveis = [];
    for (let i = de; i <= ate; i++) {
        numerosPossiveis.push(i);
    }

    for (let i = numerosPossiveis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numerosPossiveis[i], numerosPossiveis[j]] = [numerosPossiveis[j], numerosPossiveis[i]];
    }

    const sorteados = numerosPossiveis.slice(0, quantidade);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: <span class="container__texto-azul">${sorteados.join(', ')}</span></label>`;
    alterarStatusBotao(true);
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotao(false);
}

document.getElementById('btn-sortear').addEventListener('click', sortear);
document.getElementById('btn-reiniciar').addEventListener('click', reiniciar);