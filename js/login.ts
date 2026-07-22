// Função para fazer o login
function fazerLogin(): void {

    // Pega os campos do formulário
    const inputUsuario = document.getElementById('usuario') as HTMLInputElement;
    const inputSenha = document.getElementById('senha') as HTMLInputElement;

    // Guarda os valores digitados
    const usuario: string = inputUsuario.value;
    const senha: string = inputSenha.value;

    // Verifica se os campos foram preenchidos
    if (usuario === '' || senha === '') {
        alert("Preencha todos os campos de login!");
        return;
    }

    // Faz uma validação simples do usuário e da senha
    if (usuario === 'admin' && senha === '1234') {
        alert("Login realizado com sucesso!");
        window.location.href = "../index.html"; // Redireciona de volta para a Home
    } else {
        alert("Usuário ou senha incorretos! (Dica: tente admin / 1234)");
    }

}

// Libera a função para ser chamada pelo HTML
(window as any).fazerLogin = fazerLogin;