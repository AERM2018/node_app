const fs = require('fs')
const colors = require('colors')
const crearArchivoTabla = async (base = 5, listar = false, hasta = 10) => {
    try {
        let salida = ''
        let consola = ''
        for (let i = 1; i <= hasta; i++) {
            consola += `${base} ${'x'.red} ${i} ${'='.bold.magenta} ${base * i}\n`
            salida += `${base} x ${i} = ${base * i}\n`
        }

        if (listar) {
            console.log("===========================")
            console.log(`Tabla del ${base}`.rainbow)
            console.log("===========================")
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`.green.underline
    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivoTabla
}