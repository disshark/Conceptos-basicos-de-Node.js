const fs = require('fs');

function leerArchivo() {
    const filePath = 'data.txt';
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.error(`Error al leer el archivo: ${err.message}`);
        console.log(`Contenido de ${filePath}:\n${data}`);
    });
}
leerArchivo();