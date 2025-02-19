import express from 'express';
import Database from '../services/Database';

const app = express();
const PORT = 3333;

app.use(express.json());

const dataBase = new Database();
const mongoUrl = ('mongodb://localhost:27017/store');
dataBase.connectMongoDb(mongoUrl);

app.get('/server', (req, res) => {
    res.send("Servidor rodando!")
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});


