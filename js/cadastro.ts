// Interface que define como será um produto
interface Produto {
    nome: string;
    preco: string;
}

// Função responsável por cadastrar um produto
function cadastrar(): void {

    // Pega os campos do HTML
    const inputNome = document.getElementById('nome') as HTMLInputElement;
    const inputPreco = document.getElementById('preco') as HTMLInputElement;

    // Guarda o que o usuário digitou
    const nomeDigitado: string = inputNome.value;
    const precoDigitado: string = inputPreco.value;

    // Verifica se algum campo ficou vazio
    if (nomeDigitado === '' || precoDigitado === '') {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    // Cria um objeto com os dados do produto
    const produto: Produto = {
        nome: nomeDigitado,
        preco: precoDigitado
    };

    // Procura se já existem produtos salvos
    const produtosSalvos: string | null = localStorage.getItem('meusProdutos');
    let gavetaDeProdutos: Produto[] = [];

    // Cria um vetor vazio para guardar os produtos
    if (produtosSalvos !== null) {
        gavetaDeProdutos = JSON.parse(produtosSalvos);
    }

    // Adiciona o novo produto ao vetor
    gavetaDeProdutos.push(produto);
    // Salva novamente no Local Storage
    localStorage.setItem('meusProdutos', JSON.stringify(gavetaDeProdutos));

    // Limpa os campos do formulário
    inputNome.value = '';
    inputPreco.value = '';

    // Exibe mensagem de sucesso
    alert("Produto cadastrado com sucesso!");
}
// Libera a função para ser chamada pelo HTML
(window as any).cadastrar = cadastrar;