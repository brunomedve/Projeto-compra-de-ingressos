function comprar() {
    let ingresso = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira a quantidade.');
        return;
      }

    if (ingresso.value == 'inferior') {
        comprarInferior(quantidade)
    } else if (ingresso.value == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarPista(quantidade);
    }

    limpaQuantidade();
}

function comprarInferior(quantidade) {
    let totalInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    if (quantidade > totalInferior) {
        alert('Quantidade de ingressos indisponível para cadeira inferior');
    } else {
        totalInferior = totalInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = totalInferior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarSuperior(quantidade) {
    let totalSuperior = parseInt(document.getElementById('qtd-superior').textContent);

    if (quantidade > totalSuperior) {
        alert('Quantidade de ingressos indisponível para cadeira Superior');
    } else {
        totalSuperior = totalSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = totalSuperior;
        alert('Compra realizada com sucesso!');
    }
}

function comprarPista(quantidade) {
    let totalPista = parseInt(document.getElementById('qtd-pista').textContent);

    if (quantidade > totalPista) {
        alert('Quantidade de ingressos indisponível para Pista');
    } else {
        totalPista = totalPista - quantidade;
        document.getElementById('qtd-pista').textContent = totalPista;
        alert('Compra realizada com sucesso!');

    }
}

function limpaQuantidade() {
    document.getElementById('qtd').value = '';
}