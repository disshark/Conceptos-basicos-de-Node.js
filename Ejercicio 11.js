const fs = require('fs');

function copiarArchivo() {
    const source = 'source.txt';
    const destination = 'destination.txt';

    fs.copyFile(source, destination, (err) => {
        if (err) return console.error(`Error al copiar el archivo: ${err.message}`);
        console.log(`${source} ha sido copiado a ${destination}.`);
    });
}
copiarArchivo();