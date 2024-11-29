var peneirasModel = require("../models/peneirasModel");

function cadastrarPeneira(req, res) {
    var titulo = req.body.tituloServer;
    var qtd_vagas = req.body.vagasServer;
    var idade = req.body.idadeServer;
    var esporte = req.body.esporteServer;
    var data_peneira = req.body.dataPeneiraServer;
    var data_inicio = req.body.dataInicioInscricaoServer;
    var data_fim = req.body.dataFimInscricaoServer;
    var fktime = req.body.fktimeServer

    // Faça as validações dos valores

     if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (qtd_vagas == undefined) {
        res.status(400).send("Sua quantidade de vagas está undefined!");
    } else if (idade == undefined) {
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
        peneirasModel.cadastrarPeneira(titulo, qtd_vagas, idade, esporte, data_peneira, data_inicio, data_fim, fktime)
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
        peneirasModel.carregarPeneira()
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
    // // Captura o ID da peneira nos parâmetros da URL
    var idPeneira = req.params.idPeneiras;

    // Verifica se o ID foi fornecido
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

module.exports = {
    carregarPeneira,
    cadastrarPeneira,
    excluirPeneira
}