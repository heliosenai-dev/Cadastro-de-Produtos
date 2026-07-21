interface Produto {
    nome: string;
    preco: string;
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

   for (const produto of gavetaDeProdutos) {
    lista.innerHTML += `<li><strong>${produto.nome}</strong> - R$ ${produto.preco}</li>`;
    }
}

mostrarNaTela();