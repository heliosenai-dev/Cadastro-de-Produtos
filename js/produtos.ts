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

    for (let i = 0; i < gavetaDeProdutos.length; i++) {
        lista.innerHTML += `<li><strong>${gavetaDeProdutos[i].nome}</strong> - R$ ${gavetaDeProdutos[i].preco}</li>`;
    }
}

mostrarNaTela();

// Adicione esta linha no final do cadastrar.ts para "liberar" a função para o HTML
(window as any).cadastrar = cadastrar;