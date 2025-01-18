const fs = require('fs');

function escribirArchivo() {
    const filePath = 'output.txt';
    fs.writeFile(filePath, 'Hola, mundo', (err) => {
        if (err) return console.error(`Error al escribir en el archivo: ${err.message}`);
        console.log(`${filePath} ha sido creado.`);
    });
}
escribirArchivo();