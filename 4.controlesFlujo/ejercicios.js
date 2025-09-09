
// crear un programa que busque en una lista de frutas si existe una pera 
// de existir mostrar la fruta caso contrario
// indicar que la fruta no existe en la lista

let frutas=["manzana", "sandilla", "pera", "naranja"]
if(frutas.length<=0) {
    console.log("al menos debes tener dos frutas en tu lista")
}else{
    let contador=0
    while(true) {
        if("pera"==frutas[contador]) {
            console.log(`la pera se encontro el la posocion ${contador}`)
            break
        }
        contador++
    }
}