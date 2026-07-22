"use strict";

// Função responsável por excluir um produto
function excluirProduto(indice) {

    // Busca os produtos salvos
    const produtosSalvos = localStorage.getItem('meusProdutos');

    // Se não existir nenhum produto = função encerra
    if (produtosSalvos === null) {
        return;
    }

    // Converte a string do Local Storage em um array
    let gavetaDeProdutos = JSON.parse(produtosSalvos);
    alert("Tem certeza que quer excluir?");

    // Remove o produto escolhido
    gavetaDeProdutos.splice(indice, 1);

    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));

    mostrarNaTela();
}

// Função responsável por editar o preço
function editarPreco(indice) {

    // Busca os produtos salvos
    const produtosSalvos = localStorage.getItem("meusProdutos");

    // Se não existir nenhum produto, encerra a função
    if (produtosSalvos === null) {
        return;
    }

    // Converte a string do Local Storage em um array
    let gavetaDeProdutos = JSON.parse(produtosSalvos);

    // Pede um novo preço
    const novoPreco = prompt("Digite o novo preço:", gavetaDeProdutos[indice].preco);

    // Verifica se o usuário cancelou ou deixou vazio
    if (novoPreco === null || novoPreco.trim() === "") {
        return;
    }
    // Atualiza o preço
    gavetaDeProdutos[indice].preco = novoPreco;

    localStorage.setItem("meusProdutos", JSON.stringify(gavetaDeProdutos));

    mostrarNaTela();
}

// Função que mostra os produtos na tela
function mostrarNaTela() {

    // Pega a lista do HTML
    const lista = document.getElementById('lista');

    // Limpa a lista
    lista.innerHTML = '';

    // Busca os produtos salvos
    const produtosSalvos = localStorage.getItem('meusProdutos');

    // Cria um array vazio
    let gavetaDeProdutos = [];

    // Pega o campo de pesquisa
    const inputPesquisa = document.getElementById("pesquisa");

    // Guarda o texto digitado
    const textoPesquisa = inputPesquisa
        ? inputPesquisa.value.toLowerCase()
        : "";

    // Carrega os produtos
    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }

    // Verifica se existe algum produto
    if (gavetaDeProdutos.length === 0) {
        lista.innerHTML = '<li>Nenhum produto cadastrado ainda.</li>';
        return;
    }

    // Filtra os produtos pela pesquisa
    const produtosFiltrados = gavetaDeProdutos.filter(produto => produto.nome.toLowerCase().includes(textoPesquisa));
    
    // Mostra cada produto na tela
    produtosFiltrados.forEach((produto, indice) => {
        lista.innerHTML += `
            <li>
                <strong>${produto.nome}</strong> - R$ ${produto.preco}
                <button class="btn-editar" onclick="editarPreco(${indice})">
                <img class="icone-botao" src="/imagens/editar_icon.png" alt="Editar">
            </button>
            
            <button class="btn-excluir" onclick="excluirProduto(${indice})">
                <img class="icone-botao" src="/imagens/remove_icon.png" alt="Excluir">
            </button>
            </li>
        `;
    });
}

mostrarNaTela();

// Libera as funções para serem chamadas pelo HTML
window.excluirProduto = excluirProduto;
window.editarPreco = editarPreco;
