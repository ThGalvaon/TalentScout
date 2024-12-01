var database = require("../database/config")

function cadastrarPeneira(titulo, qtd_vagas, idade, genero, esporte, data_peneira, data_inicio, data_fim, fktime) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarPeneira():",titulo, qtd_vagas, idade, genero, esporte, data_peneira, data_inicio, data_fim, fktime);
    
    var instrucaoSql = `
        INSERT INTO peneiras (titulo, qtd_vagas, idade, genero, esporte, data_peneira, data_inicio, data_fim, fktime) 
        VALUES ('${titulo}', ${qtd_vagas}, '${idade}', '${genero}', '${esporte}', '${data_peneira}', '${data_inicio}', '${data_fim}', ${fktime});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function carregarPeneira(idTime) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregarPeneira():", idTime);
    
    var instrucaoSql = `
        SELECT peneiras.*, concat(times.logradouro_sede, ', ', times.num_endereco) AS endereco
        FROM peneiras
        JOIN times ON peneiras.fktime = times.idTime
        WHERE fkTime = ${idTime};
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
function carregarModal(idPeneira) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function carregarModal():", idPeneira);

    var instrucaoSql = `
        SELECT peneiras.*, concat(times.logradouro_sede, ', ', times.num_endereco) AS endereco, times.nome_time
        FROM peneiras
        JOIN times ON peneiras.fktime = times.idTime
        WHERE peneiras.idPeneiras = ${idPeneira} ;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql)
}

module.exports = {
    carregarPeneira,
    cadastrarPeneira,
    excluirPeneira, 
    carregarModal,
};