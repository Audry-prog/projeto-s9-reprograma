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
            return res.status(424).send({ message: err});
        }
        console.log('Arquivo atualizado com sucesso!');
    })
    res.status(201).send(livros);
};

const deleteLivro = (req, res) => {
    const id = req.params.id;
    const livroFiltrado = livros.filter((livro) => livro.id == id);
    const index = livros.indexOf(livroFiltrado);
    livros.splice(index, 1);
    fs.writeFile('./src/models/livros.json', JSON.stringify(livros), 'utf-8', function (err) {
        if (err) {
            return res.status(424).send({ message: err});
        }
        console.log('Arquivo deletado com sucesso!');
    })
    res.status(201).send(livros);
};

const putLivro = (req, res) => {
    try {
        const id = req.params.id;
        const livroASerModificado = livros.find((livro) => livro.id == id);
        const livroModificado = req.body;
        const index = livros.indexOf(livroASerModificado);
        livros.splice(index, 1, livroModificado);
        fs.writeFile('./src/models/livros.json', JSON.stringify(livros), 'utf-8', function(err) {
            if (err) {
                return res.status(424).send({ message: err });
            } 
            console.log('Arquivo atualizado com sucesso')
        })
        res.status(200).send(livros);
    } catch(err) {
        return res.status(424).send({ message: err });
    }
};

const patchLivro = (req, res) => {
    const id = req.params.id;
    try {
        const parametroASerAtualizado = req.body;
        const livroASerAtualizado = livros.find((livro) => livro.id == id);
        Object.keys(parametroASerAtualizado).forEach((key) => {livroASerAtualizado[key] = parametroASerAtualizado[key]});
        fs.writeFile('./src/models/livros.json', JSON.stringify(livros), 'utf-8', function(err) {
            if (err) {
                return res.status(424).send({ message: err });
            }
            console.log('Arquivo atualizado com sucesso!');
        })
        return res.status(201).send(livros);
    } catch(err) {
        return res.status(424).send({ message: err });
    }
};

module.exports = { 
    getAll, 
    getAllLivrosEstoque, 
    getById, 
    getByGenero, 
    postLivro, 
    deleteLivro,
    putLivro,
    patchLivro
};