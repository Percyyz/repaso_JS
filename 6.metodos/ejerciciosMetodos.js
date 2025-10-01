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
