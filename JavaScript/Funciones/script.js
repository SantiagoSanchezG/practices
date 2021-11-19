/**
 * FUNCIONES
 */

//Declaracion de una función
function saludar(nombre){
    if(typeof nombre === "string"){
        return `Hola ${nombre}, muy buenos días`
    }
}

let sas = saludar
console.log(typeof sas)
console.log(sas)
console.log(sas("Juan"))

//Funciones anónimas
//const porque no cambia
const sumar = (a, b, c) => a+b+c
//sin parentisis para un parametro
const restar = e => {
    return e-1
}

console.log(sumar(8,5,10))
console.log(restar)

//No funciona ahora
// (function(a, b, c) {
//     console.log(a+b+c)
// }(5, 5, 5))