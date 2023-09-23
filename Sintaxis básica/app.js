//Para definir una variable global utilizo var
var variable="Nombre variable"
// Para imprimir el valor de la variable en consola utilizo console.log()
console.log(variable)
console.log("Hola mundo! Es mi primera aplicación")

variable="Segundo nombre de la variable"
console.log(variable)

variable=2345678
console.log(variable)

var variableDos;
console.log(variableDos)

variableDos="Segunda variable"
console.log(variableDos)

//Variables locales
//Un bloque de codigo es cualquier codigo que este encerrado en llaves
let variableLocal="Segundo valor";
{
    let variableLocal="Primer valor"
    console.log(variableLocal)
    var variableGlobal="Variable global"
    console.log(variableGlobal)
}
console.log(variableGlobal)
console.log(variableLocal)

let numero = 13;
//Para los booleanos tenemos dos posibles valores:
//True=>Verdadero
//False=>Falso
let booleano=false
let caracteres="Hola mundo!"
let caracter='C'