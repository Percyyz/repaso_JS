// es la nueva version de ecma script 6 para la creacion de funciones, el objetivo de esta funcion es facilitar la creacion 
// de funcion y mejorar y que el codigo sea legible.

//  const suma=(a, b)=>{
//     return a+b
//  }
//  console.log(suma(34, 45))

//  const saludoNombre=nombre=>{
//     let mensaje = `hola, ${nombre}`
//     return mensaje
//  }
//  console.log(saludoNombre("Percy"))

//  const saludo=()=>{
//     return "hola"
//  }
//  console.log(saludo())

const suma=(a, b)=>a+b
console.log(suma(34, 45))

const saludoNombre=nombre=>`hola, ${nombre}`
console.log(saludoNombre("Percy"))

const saludo=()=>"hola"
console.log(saludo())