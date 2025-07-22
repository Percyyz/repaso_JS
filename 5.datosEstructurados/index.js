// Acceder
let frutas = ["manzana", "banana", "naranja"];
console.log(frutas[0]); // Accede al primer elemento → "manzana"

let persona = { nombre: "Ana", edad: 25 };
console.log(persona.nombre); // Accede a la propiedad → "Ana"

// Modificar
frutas[1] = "uva"; // Modifica el segundo elemento
persona.edad = 30; // Cambia la edad de Ana

console.log(frutas[1])
console.log(persona.edad)

// Crear
let nuevoUsuario = {}; // Objeto vacío
let colores = ["rojo", "azul"]; // Arreglo con valores iniciales

// Insertar
frutas.push("fresa");     // Inserta al final
frutas.unshift("mango");  // Inserta al inicio
frutas.splice(2, 0, "kiwi"); // Inserta en la posición 2
console.log(frutas[2])

let numeros = [1, 2, 3];
numeros.push(4); // Inserta al final → [1, 2, 3, 4]
numeros.unshift(0); // Inserta al inicio → [0, 1, 2, 3, 4]
console.log(numeros)

// Eliminar
let frutas = ["manzana", "banana", "uva"];
frutas.pop(); // Elimina el último → ["manzana", "banana"]
frutas.shift(); // Elimina el primero → ["banana"]

// Ordenar
let números = [4, 1, 3, 2];
números.sort(); // [1, 2, 3, 4] (ordena como texto por defecto)

let palabras = ["pera", "manzana", "uva"];
palabras.sort(); // ["manzana", "pera", "uva"]

