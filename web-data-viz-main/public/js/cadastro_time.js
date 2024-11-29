
  function validarCadastro() {
    aguardar();

    var nomeVar = username.value;
    var emailVar = email.value;
    var senhaVar = password.value;
    var confirmacaoSenhaVar = confirm_password.value;
    var telefoneVar = telephone.value
    var enderecoVar = logradouro.value
    var num_enderecoVar = num_endereco.value


    // Verificar se todos os campos estão preenchidos
    if (
      nomeVar === "" ||
      emailVar === "" ||
      senhaVar === "" ||
      confirmacaoSenhaVar === "" ||
      telefoneVar === "" ||
      enderecoVar=== "" ||
      num_enderecoVar=== "" 
    ) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "Por favor, preencha todos os campos."
      
      setInterval(finalizarAguardar, 5000)
      return false;
    }else{
      setInterval(sumirMensagem, 5000);
    }

    // Verificar se a senha e a confirmação de senha são iguais
    if (senhaVar !== confirmacaoSenhaVar) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML = "A senha e a confirmação de senha devem ser iguais!"
      return false;
    }

    var regexSenha = /^(?=.*\d)(?=.*[^\w\d\s]).{6,}$/;
    if (!regexSenha.test(senhaVar)) {
      cardErro.style.display = "block";
      mensagem_erro.innerHTML =  "A senha deve ter pelo menos 6 caracteres, incluindo 1 número e 1 caractere especial."

      return false;
    }

    // Enviar os dados via fetch
    fetch("/times/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nomeServer: nomeVar,
        emailServer: emailVar,
        senhaServer: senhaVar,
        telefoneServer: telefoneVar,
        enderecoServer: enderecoVar,
        num_enderecoServer: num_enderecoVar
      }),
    })
      .then(function (resposta) {
        if (resposta.ok) {
          cardErro.style.display = "block";
          mensagem_erro.innerHTML = "Cadastro realizado com sucesso! Redirecionando para a tela de login..."
          setTimeout(() => {
            window.location = "login_time.html";
          }, 2000);
          setInterval(finalizarAguardar, 2000)

        } else {
          throw new Error("Houve um erro ao tentar realizar o cadastro.");
        }
      })
      .catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
        finalizarAguardar();
      });

    return false;
  }
  function sumirMensagem() {
    cardErro.style.display = "none";
  }