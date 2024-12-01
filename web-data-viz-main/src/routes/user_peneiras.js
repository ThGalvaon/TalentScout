var express = require("express");
var router = express.Router();

var user_peneirasController = require("../controllers/user_peneirasController");

router.get("/carregarPeneira", function (req, res) {
    user_peneirasController.carregarPeneira(req, res);
})

router.get("/carregarModal/:idPeneiras", function (req, res) {
    user_peneirasController.carregarModal(req, res);
});

router.post("/aplicarFiltros", function (req, res) {
    user_peneirasController.aplicarFiltros(req, res);
});

router.post("/inscrever", function (req, res) {
    user_peneirasController.inscrever(req, res);
});

module.exports = router;