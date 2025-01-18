const fs = require('fs');

function sobrescribirLog() {
    const filePath = 'log.txt';
    fs.writeFile(filePath, 'Actualización completada', (err) => {
        if (err) return console.error(`Error al sobrescribir el archivo: ${err.message}`);
        console.log(`${filePath} ha sido actualizado.`);
    });
}
sobrescribirLog();