"use strict";
function excluirProduto(indice) {
    const produtosSalvos = localStorage.getItem('meusProdutos');
    if (produtosSalvos === null) {
        return;
    }
    let gavetaDeProdutos = JSON.parse(produtosSalvos);
    alert("Tem certeza que quer excluir?");
    gavetaDeProdutos.splice(indice, 1);
    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));
    mostrarNaTela();
}
function editarPreco(indice) {
    const produtosSalvos = localStorage.getItem("meusProdutos");
    if (produtosSalvos === null) {
        return;
    }
    let gavetaDeProdutos = JSON.parse(produtosSalvos);
    const novoPreco = prompt("Digite o novo preço:", gavetaDeProdutos[indice].preco);
    if (novoPreco === null || novoPreco.trim() === "") {
        return;
    }
    gavetaDeProdutos[indice].preco = novoPreco;
    localStorage.setItem("meusProdutos", JSON.stringify(gavetaDeProdutos));
    mostrarNaTela();
}
function mostrarNaTela() {
    const lista = document.getElementById('lista');
    lista.innerHTML = '';
    const produtosSalvos = localStorage.getItem('meusProdutos');
    let gavetaDeProdutos = [];
    const inputPesquisa = document.getElementById("pesquisa");
    const textoPesquisa = inputPesquisa
        ? inputPesquisa.value.toLowerCase()
        : "";
    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }
    if (gavetaDeProdutos.length === 0) {
        lista.innerHTML = '<li>Nenhum produto cadastrado ainda.</li>';
        return;
    }
    const produtosFiltrados = gavetaDeProdutos.filter(produto => produto.nome.toLowerCase().includes(textoPesquisa));
    produtosFiltrados.forEach((produto, indice) => {
        lista.innerHTML += `
            <li>
                <strong>${produto.nome}</strong> - R$ ${produto.preco}
    
                <button onclick="editarPreco(${indice})">
                    Editar
                </button>
    
                <button onclick="excluirProduto(${indice})">
                    Excluir
                </button>
            </li>
        `;
    });
}
mostrarNaTela();
window.excluirProduto = excluirProduto;
window.editarPreco = editarPreco;
