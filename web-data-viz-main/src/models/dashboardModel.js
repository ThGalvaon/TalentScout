var database = require("../database/config");

function obterQuantidadePeneiras(idTime) {
    const instrucaoSql = `
        SELECT COUNT(*) AS quantidade FROM Peneiras WHERE fkTime = ${idTime};
    `;
    return database.executar(instrucaoSql);
}

function obterProximaPeneira(idTime) {
    const instrucaoSql = `
        SELECT titulo, 
        MIN(data_peneira) AS dataProxima
        FROM Peneiras
        WHERE fkTime = ${idTime}
        GROUP BY titulo
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

function obterEsporteMaisPeneiras(idTime) {
    const instrucaoSql = `
        SELECT esporte, COUNT(*) AS quantidade
        FROM Peneiras
        WHERE fkTime = ${idTime}
        GROUP BY esporte
        ORDER BY quantidade DESC
        LIMIT 1;
    `;
    return database.executar(instrucaoSql);
}

function obterInscricoesPorSemana(idTime) {
    const instrucaoSql = `
        SELECT 
        dtInscricao AS dia,
        COUNT(*) AS quantidade
        FROM Inscricoes
        WHERE fkTime = ${idTime}
        GROUP BY dia;

    `;
    return database.executar(instrucaoSql);
}

module.exports = {
    obterQuantidadePeneiras,
    obterProximaPeneira,
    obterEsporteMaisPeneiras,
    obterInscricoesPorSemana
};
