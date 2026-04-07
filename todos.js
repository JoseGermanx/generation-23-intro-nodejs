
import fs from "fs"  //fs -> para gestionar el archivo de las tareas

import readLine from "readline" // establecer lineas de escritura en la terminal


const archivo = "todos.json"

// validar si el archivo no existe: --> crear el archivo

if (!fs.existsSync(archivo)) {
    fs.writeFileSync(archivo, "[]")
}


// crear la interfase
const rl = readLine.createInterface({
    input:process.stdin,
    output: process.stdout
})

// menu 
const mostrarMenu = () => {
    console.log("*****MENÚ*****");
    console.log("1. Agregar tarea");
    console.log("2. Listar tareas");
    console.log("3. Completar tarea");
    console.log("4. Salir");

    rl.question("Elige una opción: ", manejarOpcion);
}


// manejo de las opciones

const manejarOpcion = (opcion) => {

switch (opcion) {
    case "1":
        agregarTarea();
        break;
     case "2":
        listarTareas();
        break;
     case "3":
        console.log("acá se ejecutará la función de completar")
        break;
     case "4":
        console.log("Hasta luego!")
        rl.close();
        break;
    default:
        console.log("Opción inválida")
        break;
}

}

// Leer tareas desde el archivo
const leerTareas = () => {

    const data = fs.readFileSync(archivo, "utf8");
    const lista = JSON.parse(data);

}

// Guardar tareas en el archivo (técnicamente esteremos sobreescribiendo el archivo)
const guardarTareas = (tareas) => {
    fs.writeFileSync(archivo, JSON.stringify(tareas));

};

// funcionalidad de agregar un nuevo tarea

const agregarTarea = () => {

    rl.question("Escribe la tarea: ", texto => {
        const tareas = leerTareas();

        tareas.push({
            text: texto,
            completada: false
        });

          guardarTareas(tareas);
          console.log("Tarea creada!")
          mostrarMenu();
    } );
};

const listarTareas = ()  => {
    const tareas = leerTareas();

    console.log("Tu lista de tareas:");
    tareas.forEach((tarea, index)=>{
        const estado = tarea.completada ? "[X]" : " [ ]";
        console.log(`${index + 1}-${estado}-${tarea.text}`)
    })
mostrarMenu();
}


const completarTarea = () => {

    // realizar para completar una tarea ---> index
}


// Lanzar la app
mostrarMenu();