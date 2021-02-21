
const {crearArchivoTabla} = require('./helpers/multiplicar')
const argv = require('./config/yargs')


console.clear()
const base = argv.b;
const listar = argv.l
const hasta = argv.h

crearArchivoTabla(base,listar,hasta)
.then( res => console.log(res, 'creado'))
.catch( err => console.log(err))
