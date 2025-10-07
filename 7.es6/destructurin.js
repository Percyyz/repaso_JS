let numeros=[3,4,7,8,5,4]
let [,b,,e]=numeros
console.log(b)

let [f,...rest]=numeros
console.log(f)
console.log(rest)

let alumno={
    "nombre":"juan",
    "edad":20,
}
alumno["CUI"]=71234567

// spreadoperation
let actualizarAlumno={"id":1,...alumno, "programa":"APSTI"}
console.log(actualizarAlumno)
// acceder a un valor con destructuring
let{programa}=actualizarAlumno
console.log(programa)

// agregar con con el operador spread las letras faltantes de las vocales
let vocales=["a","e"]
let vocalFaltantes=[...vocales, "i","o","u"]
console.log(vocalFaltantes)

let vocalesFaltantes=["i","o","u"]
let vocalCompleta=[...vocales, ...vocalesFaltantes]
console.log(vocalCompleta)

//que metodo sirve para convertir un texto a lista
let texto ="hola como estan alumnos"
let nuevaLista=[...texto]
console.log(nuevaLista)