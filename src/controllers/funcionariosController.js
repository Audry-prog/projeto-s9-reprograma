const funcionarios = require('../models/funcionarios.json');
const fs = require('fs');

const getAllFuncionarios = (req, res) => {
	res.status(200).send(funcionarios);
};

const getFuncionarioById = (req, res) => {
	const id = req.params.id;
	const funcionarioFiltrado = funcionarios.find((funcionario) => funcionario.id == id);
	res.status(201).send(funcionarioFiltrado);
};

const getIdadeById = (req, res) => {
	const id = req.params.id;
	const funcionario = funcionarios.find((funcionario) => funcionario.id == id);
	const dataNascimento = funcionario.dataNascimento.split('/');
	const idade = parseInt(2020) - parseInt(dataNascimento[2]);
	res.send({
		nome: funcionario.nome,
		idade: idade,
	});
};

const getByName = (req, res) => {
	const nome = req.params.nome;
	const funcionarioPorNome = funcionarios.find(
		(funcionario) => funcionario.nome.toUpperCase() === nome.toUpperCase()
	);
	res.status(201).send(funcionarioPorNome);
};

const getCargos = (req, res) => {
	const cargos = funcionarios.map((funcionario) => funcionario.cargo);
	res.status(201).send(cargos);
};

const postFuncionario = (req, res) => {
	console.log(req.body);
	const { id, nome, cpf, rg, data_nascimento, telefone_fixo, celular, email, cargo, salario } = req.body;
	funcionarios.push({ id, nome, cpf, rg, data_nascimento, telefone_fixo, celular, email, cargo, salario });
	fs.writeFile('./src/models/funcionarios.json', JSON.stringify(funcionarios), 'utf-8', function (err) {
		if (err) {
			return res.status(424).send({ message: err });
		}
		console.log('Arquivo atualizado com sucesso!');
	});
	res.status(201).send(funcionarios);
};

const deleteFuncionario = (req, res) => {
	const id = req.params.id;
	const funcionarioFiltrado = funcionarios.filter((funcionario) => funcionario.id == id);
	const index = funcionarios.indexOf(funcionarioFiltrado);
	funcionarios.splice(index, 1);
	fs.writeFile('./src/models/funcionariosjson', JSON.stringify(funcionarios), 'utf-8', function (err) {
		if (err) {
			return status(424).send({ message: err });
		}
		console.log('Arquivo deletado com sucesso!');
	});
	res.status(201).send(funcionarios);
};

const putFuncionario = (req, res) => {
	try {
		const id = req.params.id;
		const funcionarioASerModificado = funcionarios.find((funcionario) => funcionario.id == id);
		const funcionarioModificado = req.body;
		const index = funcionarios.indexOf(funcionarioASerModificado);
		funcionarios.splice(index, 1, funcionarioModificado);
		fs.writeFile('./src/models/funcionarios.json', JSON.stringify(funcionarios), 'utf-8', function (err) {
			if (err) {
				return res.status(424).send({ message: err });
			}
			console.log('Arquivo atualizado com sucesso');
		});
		res.status(200).send(funcionarios);
	} catch(err) {
		return res.status(424).send({ message: err });
	}
};

const patchFuncionario = (req, res) => {
    const id = req.params.id;
	try {
        const parametroASerAtualizado = req.body;
		const funcionarioASerAtualizado = funcionarios.find((funcionario) => funcionario.id == id);
		Object.keys(parametroASerAtualizado).forEach((key) => {
            funcionarioASerAtualizado[key] = parametroASerAtualizado[key]
        });
		fs.writeFile('./src/models/funcionarios.json', JSON.stringify(funcionarios), 'utf-8', function(err) {
			if (err) {
				return res.status(424).send({ message: err });
			}
			console.log('Arquivo atualizado com sucesso!');
		});
		return res.status(201).send(funcionarios);
	} catch(err) {
		return res.status(424).send({ message: err });
	}
};

module.exports = {
	getAllFuncionarios,
	getFuncionarioById,
	getIdadeById,
	getCargos,
	getByName,
	postFuncionario,
	deleteFuncionario,
	putFuncionario,
	patchFuncionario,
};
