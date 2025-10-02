// crear una lista de objetos de 5 vehiculos que tenga informcion como mara, modelo, año de fabricacion, prcio, numero de placa
// creara funciones para cada una de estas acciones:
//  1. actualizar el valor de una de sus caracteristicas
// 2. agregar un nuevo vehiculo
// 3. eliminar un vehiculo
// 4. poder filtrar los vehiculos por su año de fabricacion
// 5. poder buscar un solo vehiculo por su numero de placa

let listaVeiculos=[
    {"marca":"Toyota", "modelo":"Corolla", "año":2020, "presio":20000, "placa":"abc123"},
    {"marca":"Toyoya", "modelo":"civic", "año":2021, "presio":22000, "placa":"def456"},
    {"marca":"Totoya", "modelo":"focus", "año":2019, "presio":18000, "placa":"ghi789"},
    {"marca":"Totoya", "modelo":"malibu", "año":2022, "presio":25000, "placa":"jkl012"},
    {"marca":"Toyota", "modelo":"sentra", "año":2018, "presio":17000, "placa":"mno345"}
]
// 1. actualizar el valor de una de sus caracteristicas
let actualizarCaracteristicas=listaVeiculos.map(ve=>{
    ve["marca"]="Toyota"
    return ve
})
console.log(actualizarCaracteristicas)

// 2. agregar un nuevo vehiculo
let agregarVehiculo=listaVeiculos.push({"marca":"mazda", "modelo":"3", "año":2023, "presio":27000, "placa":"pqr678"})
console.log(listaVeiculos)

// 3. eliminar un vehiculo
let eliminarVehiculo=listaVeiculos.filter(ve=>ve.placa!="def456")
console.log(eliminarVehiculo)

// 4. poder filtrar los vehiculos por su año de fabricacion
let filtrarVehiculo=listaVeiculos.filter(ve=>ve.año<2021)
console.log(filtrarVehiculo)

// 5. poder buscar un solo vehiculo por su numero de placa
let buscarVehiculo=listaVeiculos.find(ve=>ve.placa=="ghi789")
console.log(buscarVehiculo)

// con return
let buscaVehiculo=listaVeiculos.find(ve=>{
    ve["placa"]="ghi789"
    return ve
})
console.log(buscaVehiculo)
