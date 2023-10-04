//Como obtener un elemento en documento HTML por medio de los selectores

//document hace referencia al documento HTML
console.log(document.getElementsByTagName("h2")) //Obtener algun elemento HTML por medio de la etiqueta
console.log(document.getElementsByClassName("elemento-selector")) //Obtener algun elemento HTML por medio de las clases
console.log(document.getElementById("principal-title"))

//Para acceder a un elemento en especifico ya sea seleccionando por etiqueta o por clases podemos utilizar nuestra sintaxis de arreglos
console.log(document.getElementsByTagName("li")[2].innerText)

let parrafo = document.getElementById("parrafo")
console.log(parrafo)
parrafo.textContent=`Hola, este es mi primer parrafo por medio del DOM`
console.log(parrafo)
let numUno=15, numDos=26;
parrafo.textContent=`El resultado de la suma es: ${numUno+numDos}`

let botonFormulario = document.getElementById("boton-formulario")

//Con addEventListener podemos crearle eventos a nuestros botones
botonFormulario.addEventListener("click", function () {
    let nombreFormulario = document.getElementById("nombre")
    //value permite obtener el valor que ingresa en una entrada de un formulario
    let parrafoRestulado = document.getElementById("resultadoFormulario")
    parrafoRestulado.textContent=nombreFormulario.value
})