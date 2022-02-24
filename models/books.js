const conn = require("../structure/conn")

class Books {
    titles(res) {
        const query = "SELECT title_key, title FROM storyteller.titles"
        conn.query(query, (error, results) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }

    titleData(id, res) {
        const query = `SELECT a.*, b.* FROM storyteller.titles a JOIN storyteller.lines b ON a.line_key = b.line_key WHERE title_key=${id}`
        conn.query(query, (error, results) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }

    seekLine(id, res) {
        const sql = `SELECT a.*, b.* FROM storyteller.titles a JOIN storyteller.lines b ON a.line_key = b.line_key WHERE a.line_key=${id}`
        conn.query(sql, (error, resultados) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    lines(res) {
        const query = "SELECT * FROM storyteller.lines ORDER BY line"
        conn.query(query, (error, results) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json(results)
            }
        })
    }
}
module.exports = new Books;
