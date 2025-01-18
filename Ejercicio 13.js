const fs = require('fs');

function verificarOCrearBackup() {
    const dirPath = 'backup';
    if (!fs.existsSync(dirPath)) {
        fs.mkdir(dirPath, (err) => {
            if (err) return console.error(`Error al crear el directorio: ${err.message}`);
            console.log(`${dirPath} ha sido creado.`);
        });
    } else {
        console.log(`${dirPath} ya existe.`);
    }
}
verificarOCrearBackup();
