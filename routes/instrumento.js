
const express = require('express');
const router = express.Router();

const Instrumento = require('../models/Instrumento');


router.get('/add', (req, res) => {
    res.render('instrumento/add');
});


router.post('/add', async (req, res) => {
    const instrumento = new Instrumento({
        nome: req.body.nome,
        fabricante: req.body.fabricante,
        preco: req.body.preco,
        tipo: req.body.tipo
    });

    await instrumento.save();

    res.render('instrumento/addok', {
        instrumento: instrumento
    });
});


router.get('/', async (req, res) => {
    const instrumentos = await Instrumento.find();

    res.render('instrumento/lst', {
        instrumentos: instrumentos
    });
});

module.exports = router;
