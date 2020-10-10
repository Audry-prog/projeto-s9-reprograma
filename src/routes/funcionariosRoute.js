const express = require('express');
const router = express.Router();
const controller = require('../controller/funcionariosController');

router.get('/funcionarios', controller.getAllFuncionarios);
router.get('/:id', controller.getFuncionarioById);
router.post('/', controller.postFuncionario);
router.delete('/:id', controller.deleteFuncionario);

module.exports = router;