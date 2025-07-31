// Estructura de un bucle while
// 1. palabra reservada while
// 2. la condición que debe ser booleana y va entre ()
// 3. el cuerpo del bucle que se ejecutará mientras la condición sea verdadera

let contador = 1;

while (contador <= 5) {
    console.log("Contando hasta 5:", contador)
    contador++ // se actualiza el valor del contador para evitar un bucle infinito
}

