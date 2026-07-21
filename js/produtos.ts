function mostrarNaTela() {
    let lista = document.getElementById('lista');
    lista.innerHTML = ''; 

    // Puxa os dados salvos no navegador. O JSON.parse transforma o texto de volta em uma lista.
    let gavetaDeProdutos = JSON.parse(localStorage.getItem('meusProdutos')) || [];

    // Se a gaveta estiver vazia, avisa o usuário
    if (gavetaDeProdutos.length === 0) {
        lista.innerHTML = '<li>Nenhum produto cadastrado ainda.</li>';
        return; // Para a função aqui
    }

    // Se tiver produtos, passa por cada um e cria a linha
    for (let i = 0; i < gavetaDeProdutos.length; i++) {
        lista.innerHTML += `<li><strong>${gavetaDeProdutos[i].nome}</strong> - R$ ${gavetaDeProdutos[i].preco}</li>`;
    }
}

// Isso faz com que a função rode automaticamente assim que você abre a página produtos.html
mostrarNaTela();