var database = require("../database/config")

function cadastrarPeneira(titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPeneira():",titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim);
    
    var instrucaoSql = `
        INSERT INTO peneiras (titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim) VALUES ('${titulo}', ${qtd_vagas}, '${idade}', '${bairro}', '${esporte}', '${data_peneira}', '${data_inicio}', '${data_fim}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function carregarPeneira() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregarPeneira():");
    
    var instrucaoSql = `
        SELECT idPeneiras, titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim FROM peneiras;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function excluirPeneira(idPeneira) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function excluirPeneira():", idPeneira);

    var instrucaoSql = `
        DELETE FROM Peneiras WHERE idPeneiras = ${idPeneira};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    carregarPeneira,
    cadastrarPeneira,
    excluirPeneira
};