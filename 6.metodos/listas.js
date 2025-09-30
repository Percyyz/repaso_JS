let lista = []
console.log(lista.length)

// craer una lista vacia y agregar de manera automatica los numeros pares 
// que existen entre 0 y 20
let listaVacia=[]
let contadorPares=0
for(let i=1;i<=10;i++){
    if(i%2===0){
        listaVacia[contadorPares]=i
        contadorPares++
    }
}
console.log(listaVacia)

let numberPars=[]
for(let i=1;i<=20;i++){
    if(i%2===0){
        numberPars.push(i)
    }
}
console.log(numberPars)


let amigos=["Juan","Pedro","Ana"]
amigos.push("Maria") // agrega al final
amigos.unshift("Luisa") // agrega al inicio
console.log(amigos)


let frutas=["Manzana","Pera","Banano", "Uva", "Mango", "Fresa"]
let ultimaFruta=frutas.pop() // elimina el ultimo
ultimaFruta
frutas.shift() // elimina el primero
console.log(frutas)


let texto=["Hola", "Mundo", " ", "JavaScript"]
delete texto[2] // elimina el elemento pero no reordena
console.log(texto)


let vocales=["a", "e", "e", "i", "o", "u"]
vocales.splice(2,1)
console.log(vocales)


let amigosPrimaria=["jorge", "alfredo", "luis",]
let amigosSecundaria=["raul", "carlos", "santi",]
let amigosSuperior=["jusue", "maria", "jans",]
let friends=amigosPrimaria.concat(amigosSecundaria, amigosSuperior) // concatena listas
console.log(friends)