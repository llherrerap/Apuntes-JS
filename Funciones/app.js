//Las funciones se definen mediante la palabra function

//Funciones declaradas: Hacen parte del ambito global, es decir que estan disponibles en cualquier parte el codigo!!!

saludar("Maria", "45")

//Una funcion siempre debe tener un nombre al cual yo puedo llamarla más tarde si es necesario
//Los parametros, son cual dato que yo necesite para ejecutar la funcion, no son obligatorio ()
/*Estructura de una función declarada:
    function nombreFuncion(parametros){
        Logica de la aplicación
}*/
function saludar(nombre,edad){
    console.log(`Hola! Mi nombre es ${nombre} y mi edad es ${edad}`)
}

saludar("Liliana", "32")
saludar("Sebastian", "26")

console.log(sumar(67,32))

function sumar(a,b){
    //Valor de retorno: Es el valor que va a devolver la función una vez sea llamada
    let resultado
    resultado=a+b
    return resultado
}

console.log(sumar(23,5))

//Funciones expresadas: Hacen parte del ambito local, es decir que solo estarán disponibles una vez las haya creado. NO ANTES, NUNCA ESTAN DISPONIBLES ANTES DE QUE SE CREEN

const despedir = function (){
    return "Muchas gracias por utilizar la app! Hasta luego."
}

console.log(despedir())