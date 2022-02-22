const conexao = require("../infrestrutura/conexao")

class Estoque {
    puxa(res) {
        const query = "SELECT a.id, a.nome, a.descricao, d.tipo, c.img FROM item a JOIN cr_item_img b ON a.id = b.id_item JOIN img c ON b.id_img = c.id JOIN tipo d ON a.tipo_id = d.id WHERE b.principal = 1"
        conexao.query(query, (erro, resultado) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }
}
module.exports = new Estoque;
