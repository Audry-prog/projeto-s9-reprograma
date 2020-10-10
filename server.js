const app = require('./src/app');
const port = 8080;

app.listen (port,() => {
    console.log(`O App está rodando na porta ${port}`);
});