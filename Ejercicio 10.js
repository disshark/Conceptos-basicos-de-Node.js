const fs = require('fs');

function leerArchivoEnBloques() {
    const filePath = 'largeData.txt';
    const stream = fs.createReadStream(filePath, { encoding: 'utf8', highWaterMark: 1024 });

    stream.on('data', (chunk) => {
        console.log(`Bloque leído:\n${chunk}`);
    });

    stream.on('error', (err) => {
        console.error(`Error al leer el archivo: ${err.message}`);
    });
}
leerArchivoEnBloques();