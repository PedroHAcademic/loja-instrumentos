
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://127.0.0.1:27017/loja_instrumentos')
    .then(() => console.log('MongoDB conectado!'))
    .catch(err => console.log(err));

const instrumentoRoutes = require('./routes/instrumento');

app.use('/instrumento', instrumentoRoutes);

app.listen(3030, () => {
    console.log('Servidor rodando na porta 3030');
});
