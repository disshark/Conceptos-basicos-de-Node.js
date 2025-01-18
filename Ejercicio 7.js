const fs = require('fs');

function eliminarArchivo() {
    const filePath = 'temp.txt';
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) return console.error(`Error al eliminar el archivo: ${err.message}`);
            console.log(`${filePath} ha sido eliminado.`);
        });
    } else {
        console.log(`${filePath} no existe.`);
    }
}
eliminarArchivo();