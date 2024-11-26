var peneirasModel = require("../models/peneirasModel");

// function autenticar(req, res) {
//     var id = req.body.idServer;
//     var titulo = req.body.tituloServer;
//     var qtd_vagas = req.body.vagasServer;
//     var idade = req.body.idadeServer;
//     var bairro = req.body.bairroServer;
//     var esporte = req.body.esporteServer;
//     var data_peneira = req.body.dataPeneiraServer;
//     var data_inicio = req.body.dataInicioInscricaoServer;
//     var data_fim = req.body.dataFimInscricaoVarServer;
    
//     if (email == undefined) {
//         res.status(400).send("Seu email está undefined!");
//     } else if (senha == undefined) {
//         res.status(400).send("Sua senha está indefinida!");
//     } else {

//         usuarioModel.autenticar(email, senha)
//             .then(
//                 function (resultadoAutenticar) {
//                     console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
//                     console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

//                     if (resultadoAutenticar.length == 1) {
//                         console.log(resultadoAutenticar)
//                                     res.json({
//                                         id: resultadoAutenticar[0].id,
//                                         email: resultadoAutenticar[0].email,
//                                         nome: resultadoAutenticar[0].nome,
//                                         senha: resultadoAutenticar[0].senha,
//                                     });
//                     } else if (resultadoAutenticar.length == 0) {
//                         res.status(403).send("Email e/ou senha inválido(s)");
//                     } else {
//                         res.status(403).send("Mais de um usuário com o mesmo login e senha!");
//                     }
//                 }
//             ).catch(
//                 function (erro) {
//                     console.log(erro);
//                     console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
//                     res.status(500).json(erro.sqlMessage);
//                 }
//             );
//     }

// }

function cadastrar(req, res) {
    var id = req.body.idServer;
    var titulo = req.body.tituloServer;
    var qtd_vagas = req.body.vagasServer;
    var idade = req.body.idadeServer;
    var bairro = req.body.bairroServer;
    var esporte = req.body.esporteServer;
    var data_peneira = req.body.dataPeneiraServer;
    var data_inicio = req.body.dataInicioInscricaoServer;
    var data_fim = req.body.dataFimInscricaoVarServer;
    // Faça as validações dos valores
    if (id == undefined) {
        res.status(400).send("Seu id está undefined!");
    } else if (titulo == undefined) {
        res.status(400).send("Seu titulo está undefined!");
    } else if (qtd_vagas == undefined) {
        res.status(400).send("Sua quantidade de vagas está undefined!");
    } else if (idade == undefined) {
        res.status(400).send("Sua idade está undefined!");
    } else if (bairro == undefined) {
        res.status(400).send("Sua bairro está undefined!");
    } else if (esporte == undefined) {
        res.status(400).send("Sua esporte está undefined!");
    } else if (data_peneira == undefined) {
        res.status(400).send("Sua data para o dia da peneira está undefined!");
    } else if (data_inicio == undefined) {
       res.status(400).send("Sua data para o inicio da inscrição está undefined!");
    } else if (data_fim == undefined) {
        res.status(400).send("Sua data para o fim da inscrição está undefined!");
    }
        else{
        peneirasModel.cadastrar(id, titulo, qtd_vagas, idade, bairro, esporte, data_peneira, data_inicio, data_fim)
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

module.exports = {
    // autenticar,
    cadastrar
}