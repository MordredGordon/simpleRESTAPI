//const cors = require('cors');
// *** middleware cors adicionado mas desativado -> o autor utiliza em certos projetos, mas não em outros
const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

module.exports = () => {
    const app = express();
    //app.use(cors);
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    consign().include('controllers').into(app);
    return app;
}