"use strict";
// Função para fazer o login
function fazerLogin() {

    // Pega os campos do formulário
    const inputUsuario = document.getElementById('usuario');
    const inputSenha = document.getElementById('senha');

    // Guarda os valores digitados
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;

    // Verifica se os campos foram preenchidos
    if (usuario === '' || senha === '') {
        alert("Preencha todos os campos de login!");
        return;
    }

    // Faz uma validação simples do usuário e da senha
    if (usuario === 'admin' && senha === '1234') {
        alert("Login realizado com sucesso!");
        window.location.href = "../index.html"; // Redireciona de volta para a Home
    }
    else {
        alert("Usuário ou senha incorretos! (Dica: tente admin / 1234)");
    }
}

window.fazerLogin = fazerLogin;
