"use strict";
function fazerLogin() {
    const inputUsuario = document.getElementById('usuario');
    const inputSenha = document.getElementById('senha');
    const usuario = inputUsuario.value;
    const senha = inputSenha.value;
    if (usuario === '' || senha === '') {
        alert("Preencha todos os campos de login!");
        return;
    }
    // Validação simples (Simulação de login)
    if (usuario === 'admin' && senha === '1234') {
        alert("Login realizado com sucesso!");
        window.location.href = "../index.html"; // Redireciona de volta para a Home
    }
    else {
        alert("Usuário ou senha incorretos! (Dica: tente admin / 1234)");
    }
}
window.fazerLogin = fazerLogin;
