// No cambies los nombres de las funciones.

function crearUsuario() {
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // mio:  //objeto: opciones   //para crear clase hay que definir variable que sea una clase
  // Tu código:
  class Usuario{ 
constructor(opciones){ 
  this.nombre = opciones.nombre,
  this.usuario = opciones.usuario,
  this.email = opciones.email,
  this.password = opciones.password, 
} 
 }
 Usuario.prototype.saludar = function(){
  return "Hola, mi nombre es " + this.nombre //se concatena con lo que hay en this nombre
} 
return Usuario;
}

function agregarMetodoPrototype(Constructor) {
  // Agrega un método al Constructor del `prototype`
  // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
  // Tu código:
  Constructor.prototype.saludar = function(){
    return "Hello world";
  }
}

function agregarStringInvertida() {
  // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
  // El método debe llamarse "reverse"
  // Ej: 'menem'.reverse() => menem
  // 'toni'.reverse() => 'inot'
  // Pista: Necesitarás usar "this" dentro de "reverse"
  String.prototype.reverse = function() {
    var StringReverse = []; //split entrega el string dividido en cada letra
    for(let i = 0; i < this.length; i++){
      StringReverse.unshift(this[i]) //unshift va poniendo primero a los ultimos
    }
    return StringReverse.join(""); //por estar en prototype el reverse no se debe crear una nueva variable en este caso
    
  }
}
//el join es pàra que devuelva todo junto.
// this: cambia segun donde se lo invoca.
//si se invoca dentro de un contructor: hace ref a cada objeto creado en el constructor(en este caso el construc es usuario)
//el this que se pone en cada objeto hace ref a cada objeto
//this no hace ref al constructor, a no ser que se llame a su prototype (en este caso usuario)
// ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con las propiedades de la persona y sus valores.
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }

  class Persona {
    constructor(nombre, apellido, edad, domicilio) {
      // Crea el constructor:
this.nombre = nombre,
this.apellido = apellido,
this.edad = edad,
thi.domicilio = domicilio,
this.detalle = function(){
  return({   //se crea un objeto nuevo para devolver. Devuelve el metodo (this.nombre, this.apellido.....)
    Nombre: this.nombre,
    Apellido: this.apellido,
    Edad: this.edad,
    Domicilio: this.domicilio
  })
}
    }
}
//se convierte entonces en un objeto instanciado de persona.
function crearInstanciaPersona(nombre, apellido, edad, dir) {
  //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
  //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
  //Devolver la nueva persona creada
  var nuevaPersona = new Persona (nombre,apellido,edad,dir);
  return nuevaPersona;
}
  
function agregarMetodo() {
  //La función agrega un método "datos" a la clase Persona que toma el nombre y la edad de la persona y devuelve: 
  //Ej: "Juan, 22 años"
  Persona.prototype.datos = function() {
    return this.nombre + ', ' + this.edad + ' años'; //devuelve un string con nombre y edad de la persona
  }
}
  

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearUsuario,
  agregarMetodoPrototype,
  agregarStringInvertida,
  crearInstanciaPersona,
  agregarMetodo, 
  Persona
};
