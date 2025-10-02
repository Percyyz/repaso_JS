let datosAlumno={
    nombre:"Juan",
    apellido:"Perez"
}
console.log(datosAlumno)

// agreagar edad y genero
datosAlumno["edad"]=21
datosAlumno["genero"]="Masculino"
console.log(datosAlumno)

// actualizar el apellido
datosAlumno["apellido"]="Gomez"
console.log(datosAlumno)

// eliminar el genero
delete datosAlumno["genero"]
console.log(datosAlumno)



let listaAlumnos=[
    {nombre:"Lidia", edad:21, "CUI": 71500856},
    {nombre:"Maria", edad:22, "CUI": 98765435},
    {nombre:"sara", edad:20, "CUI": 24533645}
]
// deso mostrar una lista solo a los menores a 22 años
let menores22=listaAlumnos.filter(al=>al.edad<22)
console.log(menores22)

// deseo actualizar mi lista de alumnos y agregar el genero femenino a todos los alumnos
let agregarGenero=listaAlumnos.map(al=>{ // map usamos para actualizar o transformar los elementos de una lista
    al["genero"]="Femenino"
    return al
})
console.log(agregarGenero)


// de mi lista deseo mostrar a la persona que enga como CUI el siguiente numero 71500856
let buscaCUI=listaAlumnos.find(al=>al.CUI==71500856) // find usamos para buscar un elemento en una lista
console.log(buscaCUI)

let buscarCUI=listaAlumnos.find(al=>{
    return al.CUI==71500856}
    ) // find usamos para buscar un elemento en una lista
console.log(buscarCUI)