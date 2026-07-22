// Interface que define como será um produto
interface Produto {
    nome: string;
    preco: string;
}

// Função responsável por excluir um produto
function excluirProduto(indice: number): void {
    // Buscar os produtos salvos
    const produtosSalvos = localStorage.getItem('meusProdutos');

    // Se não existir nenhum produto = função encerra
    if (produtosSalvos === null) {
        return;
    }

    // Converte os dados para um vetor
    let gavetaDeProdutos: Produto[] = JSON.parse(produtosSalvos);
    alert("Tem certeza que quer excluir?")
    // Remove o produto selecionado
    gavetaDeProdutos.splice(indice, 1);

    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));

    mostrarNaTela();
}

// Função responsável por editar o preço
function editarPreco(indice: number): void {
    // Busca os produtos salvos
    const produtosSalvos = localStorage.getItem("meusProdutos");

    // Se não existir nenhum produto, encerra a função
    if (produtosSalvos === null) {
        return;
    }

    // Converte os dados para um vetor
    let gavetaDeProdutos: Produto[] = JSON.parse(produtosSalvos);

    // Pede um novo preço ao usuário
    const novoPreco = prompt(
        "Digite o novo preço:",
        gavetaDeProdutos[indice].preco
    );

    // Verifica se o usuário cancelou ou deixou vazio
    if (novoPreco === null || novoPreco.trim() === "") {
        return;
    }

    // Atualiza o preço do produto
    gavetaDeProdutos[indice].preco = novoPreco;

    localStorage.setItem("meusProdutos", JSON.stringify(gavetaDeProdutos));

    mostrarNaTela();
}

// Função que exibe os produtos cadastrados
function mostrarNaTela(): void {
    // Pega a lista do HTML
    const lista = document.getElementById('lista') as HTMLUListElement;
    // Limpa a lista antes de atualizar
    lista.innerHTML = '';

    // Busca os produtos salvos, se não houver retorna null
    const produtosSalvos: string | null = localStorage.getItem('meusProdutos');

    // Cria um vetor vazio
    let gavetaDeProdutos: Produto[] = [];

    // Pega o campo de pesquisa
    const inputPesquisa = document.getElementById("pesquisa") as HTMLInputElement;

    // Guarda o texto digitado na pesquisa
    const textoPesquisa = inputPesquisa
    ? inputPesquisa.value.toLowerCase()
    : "";

    // Carrega os produtos salvos
    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }

    // Verifica se existe algum produto
    if (gavetaDeProdutos.length === 0) {
        lista.innerHTML = '<li>Nenhum produto cadastrado ainda.</li>';
        return;
    }

    // Filtra os produtos de acordo com a pesquisa
    const produtosFiltrados = gavetaDeProdutos.filter(produto =>
        produto.nome.toLowerCase().includes(textoPesquisa)
    );

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

(window as any).excluirProduto = excluirProduto;
(window as any).editarPreco = editarPreco;

