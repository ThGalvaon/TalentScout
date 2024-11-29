var express = require("express");
var router = express.Router();

var peneirasController = require("../controllers/peneirasController");

//Recebendo os dados do html e direcionando para a função cadastrar de peneirasController.js
router.post("/cadastrarPeneira", function (req, res) {
    peneirasController.cadastrarPeneira(req, res);
})

router.get("/carregarPeneira", function (req, res) {
    peneirasController.carregarPeneira(req, res);
})

router.delete("/excluirPeneira/:idPeneiras", function (req, res) {
    peneirasController.excluirPeneira(req, res);
});

module.exports = router;