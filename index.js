const prompt = require("prompt-sync")();  

let personas = [];

function registrarPersona() {
    let nombre = prompt("Nombre: ");
    let apellido = prompt("Apellido: ");
    let dni = prompt("DNI: ");
    let telefonos = [];

    while (true) {
        let telefono = prompt("Ingrese un número de teléfono (o presione Enter para finalizar): ");
        if (telefono) {
            telefonos.push(telefono);
        } else {
            break;
        }
    }

    personas.push([nombre, apellido, dni, telefonos]);
}

while (true) {
    registrarPersona();
    let respuesta = prompt("¿Desea agregar otra persona? (si/no): ").toLowerCase();
    if (respuesta !== "si") {
        break;
    }
}

console.log("\nDatos ingresados:");
console.log(personas);
