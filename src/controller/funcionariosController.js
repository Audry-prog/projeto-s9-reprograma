const funcionarios = require('../model/funcionarios.json');
const fs = require('fs');

const getAllFuncionarios = (req, res) => {
    console.log(req.url);
    res.status(200).send(funcionarios)
}

const getFuncionarioById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(funcionarios.find((funcionario) => funcionario.id == id)
)};

const postFuncionario = (req, res) => {
    console.log(req.body);
    const { id, nome, cpf, rg, data_nascimento, telefone_fixo, celular, email, cargo, salario }
}


module.exports = { getAllFuncionarios, getFuncionarioById, postFuncionario, deleteFuncionario };