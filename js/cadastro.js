"use strict";
// Função para cadastrar um produto
function cadastrar() {

    // Pega os campos do HTML
    const inputNome = document.getElementById('nome');
    const inputPreco = document.getElementById('preco');

    // Guarda os valores digitados
    const nomeDigitado = inputNome.value;
    const precoDigitado = inputPreco.value;

    // Verifica se os campos estão vazios
    if (nomeDigitado === '' || precoDigitado === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Cria um objeto com os dados do produto
    const produto = {
        nome: nomeDigitado,
        preco: precoDigitado
    };

    // Busca os produtos salvos no navegador
    const produtosSalvos = localStorage.getItem('meusProdutos');

    // Cria um array vazio para guardar os produtos
    let gavetaDeProdutos = [];

   // Se existirem produtos salvos, converte a string para um array
    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }

    // Adiciona o novo produto ao array
    gavetaDeProdutos.push(produto);

    // Salva novamente os produtos
    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));

    // Limpa os campos
    inputNome.value = '';
    inputPreco.value = '';
    alert("Produto cadastrado com sucesso!");
}

// Libera a função para ser chamada pelo HTML
window.cadastrar = cadastrar;
