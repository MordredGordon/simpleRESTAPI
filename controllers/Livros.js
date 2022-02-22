const Livros = require('../models/livros')

module.exports = app => {
    app.get('/titulos', (req, res) => {
        Livros.titulos(res)
    })
}