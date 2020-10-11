const express = require('express');
const router = express.Router();
const controller = require('../controllers/funcionariosController');

router.get('/', controller.getAllFuncionarios)
router.get('/:id', controller.getFuncionarioById);
router.get('/funcionario/:id', controller.getIdadeById);
router.get('/funcionario/:nome', controller.getByName);
router.get('/funcionarios/cargos', controller.getCargos);
router.post('/', controller.postFuncionario);
router.delete('/:id', controller.deleteFuncionario);

module.exports = router;