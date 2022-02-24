const customExpress = require('./config/customExpress')
const conn = require('./structure/conn')

var door = 3000;

conn.connect(error => {
    if (error) {
        console.log(error)
    } else {
        const app = customExpress();

        app.listen(door, () => console.log(">Starting server on door " + door + "<"));

        console.log('>Starting Database<')
    }
})
