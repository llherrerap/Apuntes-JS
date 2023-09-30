class Mascota { //Definicion de una clase
    //El cosntructor no es más que el molde o la plantilla para los atributos de mis objetos que cree con la clase
    //Instanciar no es más que crear un nuevo objetos
    constructor(nombre,edad,adoptado){
        //this hace referencia a la misma clase
        //Estos son los atributos o propiedades que van compartir todas las mascotas que cree con la clase Mascota
        this.nombre=nombre
        this.edad=edad
        this.adoptado=adoptado
    }
    comer(){
        return "Estoy comiendo"
    }
}

//Definicion de un objeto sin clases
const princesa = {
    nombre: "Princesa",
    edad: 8,
    adoptado: undefined,
    comer: function(){
        return "Estoy comiendo"
    }
}
const zeus ={
    nombre: "Zeus",
    edad: 1,
    adoptado: undefined
}
zeus.adoptado=true
console.log(princesa)
console.log(zeus)

//Definicion de un objeto con clases
const tara = new Mascota("Tara", 5, true)
const simba = new Mascota("Simba", 4)
console.log(tara)
console.log(simba)

//Acceder a información de los objetos que se crean apartir de clases
//Propiedades
console.log(`¿Tara es adoptada? ${tara.adoptado}`)
//Metodos
console.log(simba.comer())

//Herencia:
class Perro extends Mascota{
    constructor(nombre, edad, adoptado, tamanio){
        //Super es el metodo que va a llamar al contructor de la clase padre
        super(nombre, edad, adoptado)
        this.tamanio=tamanio
    }
    ladrar(){
        return "Guau guau"
    }
}

//Instanciar un clase hijo
const tinny = new Perro("Tinny", 7, true, "Grande")
//Accediendo a metodos de su clase padre
console.log(tinny.comer())
//Accediendo a los metodos de la clase hijo
console.log(tinny.ladrar())