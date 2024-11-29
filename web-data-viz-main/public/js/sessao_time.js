// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_TIME;
    var nome = sessionStorage.NOME_TIME;
    
    console.log(nome)
    console.log(email)
    
    var titulo = document.getElementById("titulo");

    if (email != null && nome != null) {
        titulo.innerHTML = nome;
    } else {
        window.location = "../login_time.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login_time.html";
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "flex";
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.style.display = "flex";
        divErrosLogin.innerHTML = texto;
    }
}

