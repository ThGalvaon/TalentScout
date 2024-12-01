var dashboardModel = require("../models/dashboardModel");

function obterDadosDashboard(req, res) {
    const idTime = req.params.idTime;

    if (!idTime) {
        return res.status(400).send("O ID do time está undefined!");
    }
    
    const promises = [
        dashboardModel.obterQuantidadePeneiras(idTime),
        dashboardModel.obterProximaPeneira(idTime),
        dashboardModel.obterEsporteMaisPeneiras(idTime),
        dashboardModel.obterInscricoesPorSemana(idTime),
    ];
    Promise.all(promises)
        .then(([quantidade, proxima, esporteMais, inscricoes]) => {
            res.json({
                quantidadePeneiras: quantidade[0]?.quantidade || 0,
                proximaPeneira: proxima[0]?.dataProxima || "Nenhuma",
                esporteMaisPeneiras: esporteMais[0]?.esporte || "Nenhuma",
                inscricoesPorSemana: inscricoes
            });
        })
        .catch((erro) => {
            console.log("Erro ao obter dados da dashboard:", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    obterDadosDashboard
};
