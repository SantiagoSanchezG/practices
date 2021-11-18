//Tipos de datos
//number
console.log(typeof 50)
//string
console.log(typeof "")
//boolean
console.log(typeof true)

//Tipos de datos - Coleccion de Datos - Array (Arreglo)
/**
 * Son colecciones de datos
 * Tienen un identificador
 * y un valor
 */
console.log(typeof ["Jose", "José", "Juan", "Jean", "Oto"])
console.log(["Jose", "José", "Juan", "Jean", "Oto"]) //Imprime y da el numero de elementos desde 0

//OBJETOS
console.log({nombre: "Beto", apellido: "Quiroga"})

//Dato nulo
console.log(typeof null) //Imprime como objeto

//Tipo de dato no definido
console.log(typeof undefined)

//Variables
var alumno //declaracion de variable
//Da conflictos (antes del 2015) porque se usaba para todo
//Ahora se usa
let alumno2 = "Santiiii"
console.log(alumno2)

//Reasignacion
alumno2 = "sa"
console.log(alumno2)

//Asignacion por referencia
let profesor = "HH"
let alumno3 = profesor
console.log(alumno3)

//Constantes
const NOMBRE2 = "w"