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

// forEach ---> va recorrer y aplicar todo el elemento de la lista
let numeros=[1,2,3,4,5]
numeros.forEach(n=>{console.log(n**2)})


// map ---> va recorrer y aplicar todo el elemento de la lista y genera una nueva lista 
let numbers=[1, 2, 3, 4, 5, 6]
let nuevoNumeros=numbers.map(n=>{return n+1})
console.log(nuevoNumeros)


// includes ---> busca un elemento en la lista y devuelve true o false
let nombres=["juan", "pedro", "maria", "luisa"]
let estaJuan=nombres.includes("juan")
console.log(estaJuan)

let estaJunior=nombres.includes("junior")
console.log(estaJunior)


// filter ---> filtra los elementos de una lista que cumplan con una condicion
let nmrs=[2, 4, 6, 8, 1, 5]
let nNumeros= nmrs.filter(n=>{return n<4})
console.log(nNumeros)

// de una lista de numeros del 1 al 10 usando filter eliminar el numero 1
let numerosDel1Al10=[1,2,3,4,5,6,7,8,9,10]
let numerosFiltrados=numerosDel1Al10.filter(n=>{return n!==1})
console.log(numerosFiltrados)