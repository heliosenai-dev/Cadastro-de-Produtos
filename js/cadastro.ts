interface Produto {
    nome: string;
    preco: string;
}

function cadastrar(): void {
    const inputNome = document.getElementById('nome') as HTMLInputElement;
    const inputPreco = document.getElementById('preco') as HTMLInputElement;

    const nomeDigitado: string = inputNome.value;
    const precoDigitado: string = inputPreco.value;

    if (nomeDigitado === '' || precoDigitado === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const produto: Produto = {
        nome: nomeDigitado,
        preco: precoDigitado
    };

    const produtosSalvos: string | null = localStorage.getItem('meusProdutos');
    let gavetaDeProdutos: Produto[] = [];

    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }

    gavetaDeProdutos.push(produto);
    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));

    inputNome.value = '';
    inputPreco.value = '';

    alert("Produto cadastrado com sucesso!");
}
//para "liberar" a função para o HTML
(window as any).cadastrar = cadastrar;