/* 
1. crear un programa haciendo uso de una funcion un contador de vocales,
la funcion debera recibir un texto y la vocal a buscar y 
retorna la cantidad de veces que se encuentra dicha vocal.
Hacer uso de los metodos para string
*/ 
let texto = "Hola mundo"
let vocal = "U"
function contarVocales(texto, vocal) {
    let contador = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === vocal.toLowerCase()) {
            contador++;
        }
    }
    return contador;
}
console.log(contarVocales(texto, vocal))

/*
2. crear un programa haciendo uso de una funcion que pueda recibir una lista de amigos
y que retorne otra lista pero con los nombres en mayusculas.
*/
let amigos = ["juan", "pedro", "maria", "luis"]
function convertList(listaAmigos) {
    let listaMayusculas = []
    for (let i=0; i<listaAmigos.length; i++) {
        listaMayusculas[i] = listaAmigos[i].toUpperCase()
    }
    return listaMayusculas
}
console.log(convertList(amigos))