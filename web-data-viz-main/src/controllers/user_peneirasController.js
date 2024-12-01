var user_peneirasModel = require("../models/user_peneirasModel");

function carregarPeneira(req, res) {
        user_peneirasModel.carregarPeneira()
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
}

function carregarModal(req, res) {
    
    var idPeneira = req.params.idPeneiras;

    if (!idPeneira) {
        res.status(400).send("O ID da peneira está undefined!");
        return;
    }
    user_peneirasModel.carregarModal(idPeneira)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
    function (erro) {
        console.log(erro);
        console.log(
            "\nHouve um erro ao realizar o cadastro! Erro: ",
            erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
    }
)}

function aplicarFiltros(req, res) {
    const filtros = req.body;

    let whereClause = [];
    if (filtros.idade) {
        whereClause.push(`peneiras.idade = '${filtros.idade}'`);
    }
    if (filtros.esporte) {
        whereClause.push(`peneiras.esporte = '${filtros.esporte}'`);
    }
    if (filtros.genero) {
        whereClause.push(`peneiras.genero = '${filtros.genero}'`);
    }

    const whereQuery = whereClause.length > 0 ? `WHERE ${whereClause.join(" AND ")}` : "";

    user_peneirasModel.aplicarFiltros(whereQuery)
        .then((resultado) => {
            res.json(resultado);
        })
        .catch((erro) => {
            console.log("\nHouve um erro ao realizar a filtragem! Erro: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

function inscrever(req, res) {
    const {fkUsuarios, fkPeneiras, fkTime, dtInscricao} = req.body;

    if (!fkUsuarios || !fkPeneiras || !fkTime) {
        return res.status(400).json({ erro: "Campos obrigatórios não preenchidos." });
    }

    user_peneirasModel.validarInscricao(fkUsuarios, fkPeneiras)
        .then((resultado) => {
            if (resultado.length > 0) {
                return res.status(400).json({ erro: "Usuário já inscrito nesta peneira." });
            }

            return user_peneirasModel.inscrever(fkUsuarios, fkPeneiras, fkTime, dtInscricao)
                .then(() => {
                    res.status(200).json({ mensagem: "Inscrição realizada com sucesso!" });
                });
        })
        .catch((erro) => {
            console.log("\nErro ao realizar inscrição: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    carregarPeneira,
    carregarModal,
    aplicarFiltros,
    inscrever,
}