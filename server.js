const app = require('./src/app');
const port = 5000;

app.listen (port,() => {
    console.log(`O App está rodando na porta ${port}`);
});