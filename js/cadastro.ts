// 1. Criamos um "molde" que define o que é um produto
interface Produto {
    nome: string;
    preco: string;
}

function cadastrar(): void {
    // 2. Avisamos ao TypeScript que esses elementos são campos de input (HTMLInputElement)
    const inputNome = document.getElementById('nome') as HTMLInputElement;
    const inputPreco = document.getElementById('preco') as HTMLInputElement;

    const nomeDigitado: string = inputNome.value;
    const precoDigitado: string = inputPreco.value;

    if (nomeDigitado === '' || precoDigitado === '') {
        alert("Por favor, preencha todos os campos!");
        return; 
    }

    // O nosso pacote agora segue as regras da interface "Produto"
    const produto: Produto = {
        nome: nomeDigitado,
        preco: precoDigitado
    };

    // Lemos o que está no localStorage (que retorna texto ou nulo)
    const produtosSalvos: string | null = localStorage.getItem('meusProdutos');
    
    // Criamos a gaveta tipada como uma lista de Produtos (Produto[])
    let gavetaDeProdutos: Produto[] = [];

    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }

    gavetaDeProdutos.push(produto);

    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));

    // Limpa os campos
    inputNome.value = '';
    inputPreco.value = '';

    alert("Produto cadastrado com sucesso!");
}