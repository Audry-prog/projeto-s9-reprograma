const funcionarios = require('../models/funcionarios.json');
const fs = require('fs');

const getAllFuncionarios = (req, res) => {
    res.status(200).send(funcionarios)
}

const getFuncionarioById = (req, res) => {
    const id = req.params.id;
    const funcionarioFiltrado = funcionarios.find((funcionario) => funcionario.id == id);
    res.status(201).send(funcionarioFiltrado)
};

const postFuncionario = (req, res) => {
    console.log(req.body);
    const { id, nome, cpf, rg, data_nascimento, telefone_fixo, celular, email, cargo, salario } = req.body;
    funcionarios.push({ id, nome, cpf, rg, data_nascimento, telefone_fixo, celular, email, cargo, salario });
    fs.writeFile('./src/models/funcionarios.json', JSON.stringify(funcionarios), 'utf-8', function (err) {
        if (err) {
            return res.status(424).send({ mesage: err});
        }
        console.log('Arquivo atualizado com sucesso!');
    })
    res.status(201).send(funcionarios);
}

const deleteFuncionario = (req, res) => {
    const id = req.params.id;
    const funcionarioFiltrado = funcionarios.filter((funcionario) => funcionario.id == id);
    const index = funcionarios.indexOf(funcionarioFiltrado);
    funcionarios.splice(index, 1);
    fs.writeFile('./src/models/funcionariosjson', JSON.stringify(funcionarios), 'utf-8', function (err) {
        if (err) {
            return status(424).send({ mesage: err});
        }
        console.log('Arquivo deletado com sucesso!')
    })
    res.status(201).send(funcionarios);
}

module.exports = { getAllFuncionarios, getFuncionarioById, postFuncionario, deleteFuncionario };