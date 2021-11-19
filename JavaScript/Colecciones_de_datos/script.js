/**
 * Arrays
 */

let amigos2 = []
let amigos = ["Pedro", "Gabriel", "Erick", "Daniel"]
console.log(amigos)

//Agregar y quitar elementos
//push y pop modifican
//
amigos.push("Gastón")
console.log(amigos.push()) //Ver tamaño
console.log(amigos)
amigos.pop()
console.log(amigos)
//Parte el array en dos
//Slice no modifica el array
let dos = amigos.slice(0,2)
console.log(dos)
console.log(amigos)

//ForEach
//Neceita de parametro una funcion
amigos.forEach(amigo => console.log(amigo))

//map
//modfifica
let otr = amigos.map(amigo => `Hola ${amigo}`)
console.log(otr)

//filter
let numeros = [7,8,9,14,45,55,23]
console.log(numeros)
let nume = numeros.filter(num => num>20)
console.log(nume)

//find
//Busca el primer numero que cumpla la condicion
console.log(numeros.find(num => num > 39))

//includes
//busca un numero especifico 
console.log(numeros.includes(23))

//some
//True si alguno cumple la condicion
console.log(numeros.some(num => num<0))

//every
//true si todos cumple la condicon
console.log(numeros.every(num => num>0))

/**
 * Strings
 */
let texto = "Santiago Sánchez Grisales"
console.log(texto.slice(0,8))
console.log(texto.split(" "))
console.log(texto.split(""))
console.log(texto.toLocaleLowerCase())
console.log(texto.toLocaleUpperCase())

/**
 * objetos
 */
let alumno = {
    nombre: "Santiago",
    edad: 18
}

console.log(alumno)
console.log(alumno.nombre)
console.log(alumno["edad"])

console.log(Object.values(alumno))
console.log(Object.keys(alumno))

/**
 * Math y Date
 */

// const valor = Math.random() * 10
// const valor = Math.PI
// const valor = Math.max(50, 2, 26, 88)
const valor = new Date()
console.log(valor.getFullYear())