// Requireds - 3 Tipos
const fs = require('fs');
const colors = require('colors');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite = 10) => {
    console.log('=================');
    console.log(`  Tabla del ${base}  `.green);
    console.log('=================');
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${colors.blue(i*base)}`);
    }
}


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un número`)
            return;
        }
        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${(i*base)}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-límite-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else {
                resolve(`tabla-${base}-límite-${limite}.txt`)
            }
        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}