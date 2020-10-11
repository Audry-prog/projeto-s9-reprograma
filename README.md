<h1 align="center">Projeto Prático - Semana 9</h1>

Olá, o repositório da semana 9 do curso de back-end do Projeto {Reprograma} é o resultado do conteúdo visto sobre APIs, onde utilizamos o método GET para a filtragem de dados, POST para inserção de novos registros e DELETE para deletar arquivos do ojeto JSON.

## Exercício

Implementar um sistema de uma livraria, onde a mesma poderá:

1 - fazer a inclusão de seu estoque contendo as seguintes informações: 

```json
{  
   "id": 1,
   "titulo": "Guerra e Paz",
   "autor": "Liev Tolstói",
   "genero": "Romance Histórico",
   "editora": "Companhia das Letras", 
   "edicao":"1ª Edição",
   "ano":2017,
   "statusEstoque":false,
   "isbn":"978-8535930047"
},
```

2 - Adição dos seeguintes dados de seus funcionários:

```json
{  
   "id": 1,
   "nome": "Rosa Adriana Nascimento",
   "cpf": "60047758600",
   "rg": "158261094",
   "dataNascimnto": "27/10/1991",
   "telefoneFixo": "81-27949828",
   "celular": "81-987781813",
   "email": "rosa@library.com.br",
   "cargo": "vendedor",
   "salario": "R$ 1.576,00"
},
```

3 - Exclusão do registro de um determinado livro.

4 - Exclusão do registro de um determinado funcionário.

5 - Lista completa com todos os livros do estoque.

6 - Lista com todos os funcionários.

7 - Lista com todos os livros por categoria.

8 - Acessar a idade de um funcionário, de acordo com seu id.

#### Contratos que deverão ser entregues do Sistema de Estoque:

| Recurso                                  | Descrição                            |
| ---------------------------------------- | ------------------------------------ |
| `/`                                      | Entra no Sistema da Livraria         |
| `/livros`                                | Retorna todos os livros              |
| `/livros/estoque`                        | Retorna todos os livros do Estoque   |
| `/livros/[nome-do-livro]`                | Retorna apenas um livro específico   |
| `/livros/livro/[nome-do-livro]`          | Retorna todos os livros por gênero   |

---

#### Contratos que deverão ser entregues do Sistema de Funcionários:

| Recurso                                          | Descrição                                  
| -------------------------------------------------| -------------------------------------------|
| `/funcionarios`                                  | Retorna todos os funcionários                               |
| `/funcionarios/:id`                              | Retorna apenas um funcionário específico                                 |
| `/funcionarios/funcionario/:id`                  | Retorna a idade de um funcionário específico                                 |
| `/funcionarios/funcionario/[nome-do-funcionario]`| Retorna o registro do funcionário através de seu nome                                |
| `/funcionarios/funcionarios/cargos`              | Retorna todas os cargos da Livraria                                   |

---

## Estrutura das pastas:

```
pasta-do-projeto
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   └── app.js
├── package-lock.json
├── package.json
└── server.js
```

### Postman

Ferramenta utilizada para executar a funcionalidade DELETE e POST que a contratante solicitava em seu contrato. Com ela foi possível testar os serviços RESTful por meio do envio de requisições HTTP e da análise do seu retorno.

**OBS:**
<br>
Todos os dados da base de funcionários são dados fictícios.