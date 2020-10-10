const livros = require('../models/livros.json');
const fs = require('fs');

const getAll = (req, res) => {
    res.status(200).send(livros);
};

const getAllLivrosEstoque = (req, res) => {
    const livrosEstoque = livros.filter((livro) => livro.statusEstoque === true);
    const livrosEstoqueTrue = livrosEstoque.map((livro) => ({"titulo": livro.titulo, "isbn": livro.isbn}));
    res.status(200).send(livrosEstoqueTrue)
};

const getById = (req, res) => {
    const id = req.params.id;
    res.status(200).send(livros.find((livro) => livro.id == id)
)};

const getByGenero = (req, res) => {
    const genero = req.params.genero;
	const livroFiltradoPorGenero = livros.filter((livro) => livro.genero.toUpperCase() == genero.toUpperCase());
	res.status(200).send(livroFiltradoPorGenero);
};

const postLivro = (req, res) => {
    console.log(req.body);
    const { id, titulo, autor, genero, editora, edicao, ano, statusEstoque, isbn } = req.body;
    livros.push({ id, titulo, autor, genero, editora, edicao, ano, statusEstoque, isbn });
    fs.writeFile('./src/models/livros.json', JSON.stringify(livros), 'utf-8', function (err) {
        if (err) {
            return res.status(424).send({ mesage: err});
        }
        console.log('Arquivo atualizado com sucesso!');
    })
    res.status(201).send(livros);
}

const deleteLivro = (req, res) => {
    const id = req.params.id;
    const livroFiltrado = livros.filter((livro) => livro.id == id);
    const index = livros.indexOf(livroFiltrado);
    livros.splice(index, 1);
    fs.writeFile('./src/models/livros.json', JSON.stringify(livros), 'utf-8', function (err) {
        if (err) {
            return res.status(424).send({ mesage: err});
        }
        console.log('Arquivo deletado com sucesso!');
    })
    res.status(201).send(livros);
}

module.exports = { getAll, getById, getByGenero, getAllLivrosEstoque, postLivro, deleteLivro };


