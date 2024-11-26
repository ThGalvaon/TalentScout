var express = require("express");
var router = express.Router();

var peneirasController = require("../controllers/peneirasController");

//Recebendo os dados do html e direcionando para a função cadastrar de peneirasController.js
router.post("/cadastrar", function (req, res) {
    peneirasController.cadastrar(req, res);
})

// router.post("/autenticar", function (req, res) {
//     peneirasController.autenticar(req, res);
// });

module.exports = router;