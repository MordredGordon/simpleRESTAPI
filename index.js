const customExpress = require('./config/customExpress')
const conexao = require('./infrestrutura/conexao')

conexao.connect(erro => {
    if (erro) {
        console.log(erro)
    } else {
        const app = customExpress();

        app.listen(7201, () => console.log(">Inicializando Servidor<"));

        console.log('>Inicializando Database<')
    }
})


