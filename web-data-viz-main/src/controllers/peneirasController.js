var peneirasModel = require("../models/peneirasModel");

function cadastrarPeneira(req, res) {
    var titulo = req.body.tituloServer;
    var qtd_vagas = req.body.vagasServer;
    var idade = req.body.idadeServer;
    var genero = req.body.generoServer;
    var esporte = req.body.esporteServer;
    var data_peneira = req.body.dataPeneiraServer;
    var data_inicio = req.body.dataInicioInscricaoServer;
    var data_fim = req.body.dataFimInscricaoServer;
    var fktime = req.body.fktimeServer

     if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (qtd_vagas == undefined) {
        res.status(400).send("Sua quantidade de vagas está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (genero == undefined) {
        res.status(400).send("Sua idade está undefined!");
    }  else if (esporte == undefined) {
        res.status(400).send("Sua esporte está undefined!");
    } else if (data_peneira == undefined) {
        res.status(400).send("Sua data para o dia da peneira está undefined!");
    } else if (data_inicio == undefined) {
       res.status(400).send("Sua data para o inicio da inscrição está undefined!");
    } else if (data_fim == undefined) {
        res.status(400).send("Sua data para o fim da inscrição está undefined!");
    }else if (fktime == undefined) {
        res.status(400).send("Sua data para o fim da inscrição está undefined!");
    }
        else{
        peneirasModel.cadastrarPeneira(titulo, qtd_vagas, idade, genero, esporte, data_peneira, data_inicio, data_fim, fktime)
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
}

function carregarPeneira(req, res) {

        var idTime = req.params.idTime

        peneirasModel.carregarPeneira(idTime)
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
function excluirPeneira(req, res) {

    var idPeneira = req.params.idPeneiras;

    if (!idPeneira) {
        res.status(400).send("O ID da peneira está undefined!");
        return;
    }
    peneirasModel.excluirPeneira(idPeneira)
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

function carregarModal(req, res) {
    
    var idPeneira = req.params.idPeneiras;

    if (!idPeneira) {
        res.status(400).send("O ID da peneira está undefined!");
        return;
    }
    peneirasModel.carregarModal(idPeneira)
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

    peneirasModel.aplicarFiltros(whereQuery)
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

    peneirasModel.validarInscricao(fkUsuarios, fkPeneiras)
        .then((resultado) => {
            if (resultado.length > 0) {
                return res.status(400).json({ erro: "Usuário já inscrito nesta peneira." });
            }

            return peneirasModel.inscrever(fkUsuarios, fkPeneiras, fkTime, dtInscricao)
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
    cadastrarPeneira,
    excluirPeneira,
    carregarModal,
    aplicarFiltros,
    inscrever,
}