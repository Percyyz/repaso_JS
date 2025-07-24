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