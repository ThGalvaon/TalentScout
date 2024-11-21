const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('login_form');
    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('dark');
});

function entrar() {
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    
    // Verifique se os elementos existem
    if (!email || !password) {
        alert('Erro: um ou mais campos não foram encontrados!');
        return false;
    }

    // // Validação do email
    // const emailRegex = /^[^\s@]+@[^\s@]+\.(com|br)$/;
    // if (!emailRegex.test(email.value)) {
    //     alert('O email deve conter "@" e terminar com ".com" ou ".br".');
    //     return false;
    // }

    // // Validação da senha
    // const passwordRegex = /^(?=.*[A-Z])(?=.*\d)/;
    // if (!passwordRegex.test(password.value)) {
    //     alert('A senha deve conter pelo menos uma letra maiúscula e um número.');
    //     return false;
    // }
    
    fetch("/usuario/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            emailServer: email.value,
            senhaServer: password.value
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert('Login autenticado com sucesso! Redirecionando para tela da dashboard...');

                setTimeout(() => {
                    window.location = "public\dash soya\dashboard.html";
                }, "2000");
            }
            else {
                throw "Houve um erro ao tentar realizar o login!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });


    return true; // Se todas as validações passarem
}

// Adicionando o evento de submit ao formulário
// document.getElementById('login_form').addEventListener('submit', (event) => {
//     if (!validateForm()) {
//         event.preventDefault(); // Impede o envio do formulário se a validação falhar
//     }
// });

// fetch("/usuarios/autenticar", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//         emailServer: emailVar,
//         senhaServer: senhaVar
//     })
//  })
