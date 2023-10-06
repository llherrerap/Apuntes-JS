//Con setItem podemos guardar información en el localStorage

//Variable nombreUsuario con el valor Liliana
let nombreUsuario = "Liliana"
//Se guarda la variable nombreUsuario en el localStorage con la llave "nombre"
localStorage.setItem("nombre", nombreUsuario)

//Definición del arreglo comida
const comida = ["Tamal", "Pescado", "Lechona"]
//Se guarda el arreglo comida en el localStorage con la llave "comidaFavorita"
localStorage.setItem("comidaFavorita", comida)

//Para obtener información del LocalStorage utilizamos el metodo getItem
//Se guarda la información del localStorage en la variable datoGuardad
let datoGuardado = localStorage.getItem("comidaFavorita")

//DOM
//Traer el elemento con el id "comida" y guardarlo
let parrafoComida = document.getElementById("comida")
//Le añadimos el datoGuardado al parrafoComida
parrafoComida.textContent = `La comida favorita de Liliana es: ${datoGuardado}`

let fechaNacimiento = document.getElementById("fecha")
let botonFecha = document.getElementById("enviar")
console.log(fechaNacimiento)

botonFecha.addEventListener("click", function (){
    let valorFecha = fechaNacimiento.value
    localStorage.setItem("fechaNacimiento", valorFecha)
})

let fechaGuardada = localStorage.getItem("fechaNacimiento")
const parrafoFecha = document.getElementById("mostrar-fecha")
parrafoFecha.textContent = `La ultima fecha guardada es: ${fechaGuardada}`