

import fs from "fs" // tiene la abstracción para manejar el file system


fs.writeFileSync("mensaje.txt", "Hola mundo desde Node")

// Si no exite el archivo, lo crea.
// Si exite -> lo sobreescribe

const lista = `1. Item 1
2. Item 2
3. Item 3
`

fs.writeFileSync("lista.txt", lista)

const tareas = [
    {text: "Estudiar Node"},
    {text: "Programar app"},
    {text: "Dormir"}
]

fs.writeFileSync("tareas.json", JSON.stringify(tareas))

const contenidoTareas = fs.readFileSync("tareas.json", "utf8")


JSON.parse(contenidoTareas).forEach(tarea => {
    console.log(tarea.text)
})