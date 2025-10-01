// Esto es un objeto o diccionario vacio
let objeto={}
console.log(objeto)

// ojo: si la clave no existe lo crea
// si la clave existe entonces actualiza el valor
objeto["nombre"]="percy"
objeto["nombre"]="juan"
objeto["edad"]=20
objeto["cui"]=71500856
// notacion de tipo punto
console.log(objeto.nombre)
// notacion de tipo llaves
console.log(objeto["nombre"])
delete objeto.cui
console.log(objeto)