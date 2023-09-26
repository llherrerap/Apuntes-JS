let edad=71.5;
let nombre="Juan"

//if - else
if(edad>18){
    //Para sacar estas tildes es atlGr y la tecla }
    console.log(`Bienvenido ${nombre} tu edad es ${edad}`)
}else if(edad==18){
    //Else if permite más de una condición
    console.log(`Todavia no tienes la edad suficiente`)
}else{
    console.log("Lo siento, no eres mayor de edad,", "tu edad es", edad, "años")
}

//Operador ternario
// ? => si se cumple - verdadero
// : => de lo contrario - falso
let mayorEdad = (edad>=18) ? "Eres mayor de edad" : "Eres menor de edad"
console.log(mayorEdad)

//Estructura switch
let opcion, num1,num2, resultado;
opcion="Modulo"
num1=12;
num2=54

switch (opcion) {
    case "Suma":
        console.log("Escogiste la suma!")
        resultado=num1+num2
        break;
    case "Resta":
        console.log("Escogiste la resta!")
        resultado=num1-num2
        break;
    case "Multiplicacion":
        console.log("Escogiste la multiplicación!")
        resultado=num1*num2
        break
    default:
        console.log("Operación no definida")
        resultado=null;
        break;
}
console.log(resultado)

let nom, apellido, age, cancion, respuesta;
nom="Liliana"
apellido="Herrera"
console.log(`Hola! Mi nombre es ${nom} ${apellido} y tengo ${age} años, mi canción favorita es ${cancion} y la respuesta es ${respuesta}`)