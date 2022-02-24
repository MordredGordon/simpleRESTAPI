const Books = require('../models/books')

module.exports = app => {
    app.get('/titles', (req, res) => {
        Books.titles(res)
    })

    app.get('/lines', (req, res) => {
        Books.lines(res)
    })

    app.get('/line/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Books.seekLine(id, res)
    })

    app.get('/titledata/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Books.titleData(id, res)
    })

}
