
import fs from "fs"

const args = process.argv.slice(2);

//nombre del archivo
const nombreArchivo = args[0]

//contenido del archivo
const contenidoArchivo = args[1]

fs.writeFileSync(nombreArchivo, contenidoArchivo)

