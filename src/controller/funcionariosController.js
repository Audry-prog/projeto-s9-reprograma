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
    const { id, nome, cpf, rg, data_nascimento, telefone_fixo, celular, email, cargo, salario } = req.body;
    funcionarios.push({ id, nome, cpf, rg, data_nascimento, telefone_fixo, celular, email, cargo, salario });
    fs.writeFile('./src/model/funcionarios.json', JSON.stringify(funcionarios), 'utf-8', function (err) {
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
    fs.writeFile('./src/model/funcionariosjson', JSON.stringify(funcionarios), 'utf-8', function (err) {
        if (err) {
            return status(424).send({ mesage: err});
        }
        console.log('Arquivo deletado com sucesso!')
    })
    res.status(201).send(funcionarios);
}

module.exports = { getAllFuncionarios, getFuncionarioById, postFuncionario, deleteFuncionario };