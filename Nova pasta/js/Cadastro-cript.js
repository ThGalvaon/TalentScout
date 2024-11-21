const mode = document.getElementById('mode_icon'); /* estou pegando
o botao para adicionar os devidos eventos, peguei ele pelo id'mode_icon' */ 


/*agora irei adicionar um evento de clique nele, quando clicar nela vai acontecer algo */
mode.addEventListener('click', () => { 
    const form = document.getElementById('cadastro_form'); // estou pegando formulario 
    if (mode.classList.contains('fa-moon')) { //estou pegando o icone e vendo se ele tem a classe 'fa-moon'
        mode.classList.remove('fa-moon'); // caso ele contenha o icone de lua, nos iremos remover o icone de lua
        mode.classList.add('fa-sun'); // e adicionar o igno de sol, por isso a classe mudou para 'fa-son'
       
        form.classList.add('dark'); // quando o form estiver no 'fa-moon' entao ele terá que adicionar a classe dark
        return; // se chegar nessa validaçao vai parar nela 
    }

    // caso nao passe na condiçao acima entao ira cair na de baixo (semelhante a um ELSE)
    mode.classList.add('fa-moon'); // aqui eu estou adicionando a lua
    mode.classList.remove('fa-sun'); // e aqui eu estou removendo o icone de lua
    form.classList.remove('dark');
});

// Seleciona os campos apenas uma vez e os armazena em variáveis para facilitar o uso
var ipt_razao = razao_social; // Campo para Razão social
var ipt_nomeFant = nome_fantasia; // Campo para Nome fantasia
var ipt_CNPJ = cnpj; // Campo para CNPJ
var ipt_rep = Representante; // Campo para Representante legal
var ipt_email = email; // Campo para email
var ipt_senha = password; // Campo para senha
var ipt_confirm = confirm_password; // Campo para confirmação de senha

// Função para validar a razão social
function validarRazao() {
    var social = ipt_razao.value; // Obtém o valor do campo Razão social
    // Remove caracteres especiais indesejados do valor
    ipt_razao.value = social.replaceAll(/[!@#$%¨&*()]/g, '');

    // Verifica se o comprimento é maior ou igual a 3 e se não contém caracteres especiais
    if (social.length >= 3 && !/[!@#$%¨&*()]/.test(social)) {
        ipt_razao.style.border = "2px solid #08a708"; // Define a borda como verde se a validação for bem-sucedida
        return true; // Retorna verdadeiro para indicar que a validação foi bem-sucedida
    } else {
        ipt_razao.style.border = "2px solid #f70000"; // Define a borda como vermelha se a validação falhar
        return false; // Retorna falso se a validação falhar
    }
}

// Função para validar o nome fantasia
function validarFantasia() {
    var fantasia = ipt_nomeFant.value; // Obtém o valor do campo Nome fantasia
    // Remove caracteres especiais indesejados
    ipt_nomeFant.value = fantasia.replaceAll(/[!@#$%¨&*()]/g, '');

    // Verifica se o comprimento do nome fantasia é maior ou igual a 3
    if (fantasia.length >= 3) {
        ipt_nomeFant.style.border = "2px solid #08a708"; // Define a borda como verde
        return true; // Retorna verdadeiro para indicar que a validação foi bem-sucedida
    } else {
        ipt_nomeFant.style.border = "2px solid #f70000"; // Define a borda como vermelha
        return false; // Retorna falso se a validação falhar
    }
}

// Função para validar CNPJ
function validarCNPJ() {
    var CNPJ = ipt_CNPJ.value; // Obtém o valor do campo CNPJ

    // Verifica se o CNPJ contém exatamente 14 dígitos e se todos são numéricos
    if (CNPJ.length == 14 && !isNaN(CNPJ)) {
        ipt_CNPJ.style.border = "2px solid #08a708"; // Define a borda como verde
        return true; // Retorna verdadeiro para indicar que a validação foi bem-sucedida
    } else {
        ipt_CNPJ.style.border = "2px solid #f70000"; // Define a borda como vermelha
        return false; // Retorna falso se a validação falhar
    }
}

// Função para validar o representante legal
function validarRepresentante() {
    var Repre = ipt_rep.value; // Obtém o valor do campo Representante legal
    // Remove caracteres especiais indesejados
    ipt_rep.value = Repre.replaceAll(/[!@#$%¨&*()]/g, '');

    // Verifica se o comprimento do nome do representante é maior ou igual a 3
    if (Repre.length >= 3) {
        ipt_rep.style.border = "2px solid #08a708"; // Define a borda como verde
        return true; // Retorna verdadeiro para indicar que a validação foi bem-sucedida
    } else {
        ipt_rep.style.border = "2px solid #f70000"; // Define a borda como vermelha
        return false; // Retorna falso se a validação falhar
    }
}

// Função para validar o email
function validarEmail() {
    var email = ipt_email.value; // Obtém o valor do campo email
    var possui_arroba = email.includes("@"); // Verifica se o email contém '@'
    var termina_com = email.endsWith('.com'); // Verifica se o email termina com '.com'
    var termina_br = email.endsWith('.br'); // Verifica se o email termina com '.br'
    var termina_net = email.endsWith('.net'); // Verifica se o email termina com '.net'

    // Verifica se o comprimento é maior que 3, contém '@' e termina com um dos sufixos válidos
    if (email.length > 3 && possui_arroba && (termina_com || termina_br || termina_net)) {
        ipt_email.style.border = "2px solid #08a708"; // Define a borda como verde
        return true; // Retorna verdadeiro para indicar que a validação foi bem-sucedida
    } else {
        ipt_email.style.border = "2px solid #f70000"; // Define a borda como vermelha
        return false; // Retorna falso se a validação falhar
    }
}

div_mensagem.style.display = 'none'
// Função para validar a senha
function validarSenha() {
    var senha = ipt_senha.value; // Obtém o valor do campo senha
    var possui_numero = /\d/.test(senha); // Verifica se a senha contém números
    var possui_letra_maiuscula = /[A-Z]/.test(senha); // Verifica se a senha contém letra maiúscula
    var possui_letra_minuscula = /[a-z]/.test(senha); // Verifica se a senha contém letra minúscula
    var possui_caracter_especial = /[!@#$%¨&*()]/.test(senha);

    /* 
    Esta é a expressão regular. Está entre barras (/), que delimitam o início e o fim da expressão.
    O que está dentro dos colchetes ([...]) é um conjunto de caracteres que estamos buscando. 
    Isso significa que queremos verificar se a senha contém qualquer um dos caracteres listados dentro dos colchetes:
    !, @, #, $, %, ¨, &, *, (, ).
    */

    // Verifica se a senha tem pelo menos 8 caracteres e contém os requisitos
    if (senha.length >= 8 && possui_numero && possui_letra_maiuscula && possui_letra_minuscula && possui_caracter_especial) {
        ipt_senha.style.border = "2px solid #08a708"; // Define a borda como verde]
        div_mensagem.style.display = 'none'
        return true; // Retorna verdadeiro para indicar que a validação foi bem-sucedida
    } else {
        ipt_senha.style.border = "2px solid #f70000"; // Define a borda como vermelha]
        div_mensagem.style.display = 'block'
        return false; // Retorna falso se a validação falhar
    }
}

// Função para validar a confirmação de senha
function validarConfirmacao() {
    var senha = ipt_senha.value; // Obtém o valor da senha
    var confirmacao = ipt_confirm.value; // Obtém o valor da confirmação

    // Verifica se a confirmação é igual à senha e se a confirmação tem pelo menos 8 caracteres
    if (confirmacao == senha && confirmacao.length >= 8) {
        ipt_confirm.style.border = "2px solid #08a708"; // Define a borda como verde
        return true; // Retorna verdadeiro para indicar que a validação foi bem-sucedida
    } else {
        ipt_confirm.style.border = "2px solid #f70000"; // Define a borda como vermelha
        return false; // Retorna falso se a validação falhar
    }
}

// Função para validar todos os campos de cadastro
function validarCadastro(event) {
    event.preventDefault(); // Previne o envio do formulário padrão

    // Chama todas as funções de validação e armazena os resultados
    var razaoValida = validarRazao();
    var fantasiaValida = validarFantasia();
    var cnpjValido = validarCNPJ();
    var representanteValido = validarRepresentante();
    var emailValido = validarEmail();
    var senhaValida = validarSenha();
    var confirmacaoValida = validarConfirmacao();

    // Se todos os campos forem válidos, redireciona para a página de login
    if (!razaoValida || !fantasiaValida || !cnpjValido || !representanteValido || !emailValido || !senhaValida || !confirmacaoValida) {
        alert("Informações Inválidas, revise os campos em vermelho."); // Exibe uma mensagem de erro se houver campos inválidos
    } else {
        fetch("/usuario/cadastrar", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                razao_socialServer: ipt_razao.value,
                nome_fantasiaServer: ipt_nomeFant.value,
                cnpjServer: ipt_CNPJ.value,
                repreServer: ipt_rep.value,
                emailServer: ipt_email.value,
                senhaServer: ipt_senha.value
            }),
        })
            .then(function (resposta) {
                console.log("resposta: ", resposta);
    
                if (resposta.ok) {
                    alert('Cadastro realizado com sucesso! Redirecionando para a tela de login...');
    
                    setTimeout(() => {
                        window.location = "login.html";
                    }, "2000");
                }
                else {
                    throw "Houve um erro ao tentar realizar o cadastro!";
                }
            })
            .catch(function (resposta) {
                console.log(`#ERRO: ${resposta}`);
            });
    }

    // fetch("/usuario/cadastrar", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //         razao_socialServer: ipt_razao.value,
    //         nome_fantasiaServer: ipt_nomeFant.value,
    //         cnpjServer: ipt_CNPJ.value,
    //         repreServer: ipt_rep.value,
    //         emailServer: ipt_email.value,
    //         senhaServer: ipt_senha.value
    //     }),
    // })
    //     .then(function (resposta) {
    //         console.log("resposta: ", resposta);

    //         if (resposta.ok) {
    //             alert('Cadastro realizado com sucesso! Redirecionando para a tela de login...');

    //             setTimeout(() => {
    //                 window.location = "login.html";
    //             }, "2000");
    //         }
    //         else {
    //             throw "Houve um erro ao tentar realizar o cadastro!";
    //         }
    //     })
    //     .catch(function (resposta) {
    //         console.log(`#ERRO: ${resposta}`);
    //     });
}

// Adiciona o evento de submissão ao formulário para executar a função de validação
cadastro_form.addEventListener('submit', validarCadastro);

// Adiciona eventos de input aos campos para validação instantânea
ipt_razao.addEventListener('input', validarRazao);
ipt_nomeFant.addEventListener('input', validarFantasia);
ipt_CNPJ.addEventListener('input', validarCNPJ);
ipt_rep.addEventListener('input', validarRepresentante);
ipt_email.addEventListener('input', validarEmail);
ipt_senha.addEventListener('input', validarSenha);
ipt_confirm.addEventListener('input', validarConfirmacao);
