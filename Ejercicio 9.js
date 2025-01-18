const fs = require('fs');

function eliminarDirectorio() {
    const dirPath = 'carpetaAntigua';
    if (fs.existsSync(dirPath)) {
        fs.rm(dirPath, { recursive: true }, (err) => {
            if (err) return console.error(`Error al eliminar el directorio: ${err.message}`);
            console.log(`${dirPath} ha sido eliminado.`);
        });
    } else {
        console.log(`${dirPath} no existe.`);
    }
}
eliminarDirectorio();