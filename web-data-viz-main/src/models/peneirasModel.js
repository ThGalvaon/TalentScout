var database = require("../database/config")

// function autenticar(email, senha) {
//     console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
//     var instrucaoSql = `
//         SELECT id, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
//     `;
//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function cadastrarPeneira(id, titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPeneira():",id, titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim);
    
    var instrucaoSql = `
        INSERT INTO peneiras (idPeneiras, titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim) VALUES (${id}, '${titulo}', ${qtd_vagas}, '${idade}', '${bairro}', '${esporte}', '${data_peneira}', '${data_inicio}', '${data_fim}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    // autenticar,
    cadastrarPeneira
};