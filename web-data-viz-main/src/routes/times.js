var express = require("express");
var router = express.Router();

var timeController = require("../controllers/timeController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    timeController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    timeController.autenticar(req, res);
});

module.exports = router;