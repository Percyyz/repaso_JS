// Estructur de una condicion
// 1. palabra reservada if
// 2. la condicion o expresion a evaluar (que debera ser siempre un tipo de dato booleano), la expresion o ondicion debera estar entre ()
// 3. el cuerpo, que contendra el codigo a ejecutar en caso la condicion sea verdadera

// 4. palabra reservada else
// 5. cuerpo que contendra el codigo a ejecutar en caso la condicion sea falso

if (false) {
    let suma=20+23
    let divicion=45/6
    console.log(suma,divicion)
}else{
    console.log("me ejecuto pot que soy falso")
}

//crear un programa que evalue si un numero es mayor al otro y si este numero es a la vez un numero par

let firtsNumber=75
let secondNumber=30

if (firtsNumber>secondNumber) {
    if (firtsNumber%2==0) {
        console.log("el numero es mayor y par")
    }else{
        console.log("el numero en mayor pero impar")
    }
}else{
    console.log("el numero es menor")
}

// crear un programa que me muestre el numero en texto
// FORMA UNO:
let numero = 1;
let texto = "";

if (numero >= 0 && numero <= 10) {
    let numerosTexto = ["cero", "uno", "dos", "tres", "cuatro", "cinco", "seis", "siete", "ocho", "nueve", "diez"];
    texto = numerosTexto[numero];
} else {
    texto = "Número fuera de rango";
}

console.log("El número es: " + texto);



// FORMA DOS:
let número = 5;

if (número == 0) {
  número = "cero";
} else if (número == 1) {
  número = "uno";
} else if (número == 2) {
  número = "dos";
} else if (número == 3) {
  número = "tres";
} else if (número == 4) {
  número = "cuatro";
} else if (número == 5) {
  número = "cinco";
} else if (número == 6) {
  número = "seis";
} else if (número == 7) {
  número = "siete";
} else if (número == 8) {
  número = "ocho";
} else if (número == 9) {
  número = "nueve";
} else if (número == 10) {
  número = "diez";
} else {
  número = "número fuera de rango";
}

console.log(número); 

