const fs = require('fs');

function usarPipe() {
    const input = fs.createReadStream('entrada.txt');
    const output = fs.createWriteStream('salida.txt');

    input.pipe(output);

    input.on('end', () => {
        console.log('Contenido de entrada.txt ha sido escrito en salida.txt.');
    });

    input.on('error', (err) => {
        console.error(`Error al leer el archivo: ${err.message}`);
    });

    output.on('error', (err) => {
        console.error(`Error al escribir en el archivo: ${err.message}`);
    });
}
usarPipe();