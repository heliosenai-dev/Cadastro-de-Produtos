"use strict";
function mostrarNaTela() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    const produtosSalvos = localStorage.getItem('meusProdutos');
    let gavetaDeProdutos = [];
    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }
    if (gavetaDeProdutos.length === 0) {
        lista.innerHTML = '<li>Nenhum produto cadastrado ainda.</li>';
        return;
    }
    for (const produto of gavetaDeProdutos) {
        lista.innerHTML += `<li><strong>${produto.nome}</strong> - R$ ${produto.preco}</li>`;
    }
}
mostrarNaTela();
