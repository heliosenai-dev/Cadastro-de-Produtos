interface Produto {
    nome: string;
    preco: string;
}

function excluirProduto(indice: number): void {
    const produtosSalvos = localStorage.getItem('meusProdutos');

    if (produtosSalvos === null) {
        return;
    }

    let gavetaDeProdutos: Produto[] = JSON.parse(produtosSalvos);
    alert("Tem certeza que quer excluir?")
    gavetaDeProdutos.splice(indice, 1);

    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));

    mostrarNaTela();
}

function mostrarNaTela(): void {
    const lista = document.getElementById('lista') as HTMLUListElement;
    lista.innerHTML = '';

    const produtosSalvos: string | null = localStorage.getItem('meusProdutos');
    let gavetaDeProdutos: Produto[] = [];

    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }

    if (gavetaDeProdutos.length === 0) {
        lista.innerHTML = '<li>Nenhum produto cadastrado ainda.</li>';
        return;
    }

    gavetaDeProdutos.forEach((produto, indice) => {
        lista.innerHTML += `
            <li>
                <strong>${produto.nome}</strong> - R$ ${produto.preco}
                <button onclick="excluirProduto(${indice})">
                    Excluir
                </button>
            </li>
        `;
    });


}

mostrarNaTela();

(window as any).excluirProduto = excluirProduto;