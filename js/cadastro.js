"use strict";
function cadastrar() {
    const inputNome = document.getElementById('nome');
    const inputPreco = document.getElementById('preco');
    const nomeDigitado = inputNome.value;
    const precoDigitado = inputPreco.value;
    if (nomeDigitado === '' || precoDigitado === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }
    const produto = {
        nome: nomeDigitado,
        preco: precoDigitado
    };
    const produtosSalvos = localStorage.getItem('meusProdutos');
    let gavetaDeProdutos = [];
    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }
    gavetaDeProdutos.push(produto);
    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));
    inputNome.value = '';
    inputPreco.value = '';
    alert("Produto cadastrado com sucesso!");
}
//para "liberar" a função para o HTML
window.cadastrar = cadastrar;
