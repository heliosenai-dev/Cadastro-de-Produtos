// Precisamos da mesma interface aqui para o TypeScript saber como ler a lista
interface Produto {
    nome: string;
    preco: string;
}

function mostrarNaTela(): void {
    // Avisamos ao TypeScript que isso é uma lista HTML (HTMLUListElement)
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