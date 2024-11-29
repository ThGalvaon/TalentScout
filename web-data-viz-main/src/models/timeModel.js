var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O TIME MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idTime, nome_time, email_time FROM times WHERE email_time = '${email}' AND senha_time = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha, telefone, endereco, num_endereco) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, telefone, endereco, num_endereco);
    
    var instrucaoSql = `
        INSERT INTO times (nome_time, email_time, senha_time, telefone_time, logradouro_sede, num_endereco) 
        VALUES ('${nome}', '${email}', '${senha}', '${telefone}', '${endereco}', '${num_endereco}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    autenticar,
    cadastrar
};