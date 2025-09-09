// 1. FUNCIONES POR DECLARACION 
// Se puede llamar antes de ser definida
saludar();

function saludar() {
  console.log("Hola, soy una función declarada");
}

function promedioNotas(N1,N2,N3,N4){
    let suma=N1+N2+N3+N4
    let promedio=suma/4
    return promedio
}
console.log(promedioNotas(14,16,18,13))

// 2. FUNCIONES POR EXPRESION
// ❌ Esto daría error: saludar();
// Porque aún no está definida

let saludar = function() {
  console.log("Hola, soy una función por expresión");
};
saludar(); // ✅ Ahora sí funciona

// 3. FUNCIONES FLECHA (ARROW FUNCTIONS)
// Forma corta
let saludar = () => {
  console.log("Hola, soy una arrow function");
};
saludar();

// Si la función tiene solo 1 línea se puede escribir así:
let sumar = (a, b) => a + b;
console.log(sumar(5, 3)); // 8