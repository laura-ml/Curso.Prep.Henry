// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código:
  var object ={
    nombre: nombre,
    edad: edad,
    meow: function(){
      return "Meow!";
    }
  }
  return object;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código:
  objeto[property]= null; // en este caso se usa [] que sirve para acceder a una propiedad que no se el nombre, si se el nombre hay que poner el punto .
return objeto; //siempre que dice devuelve va return
}


function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  objeto[metodo](); //con los parentesis se invoca a una funcion
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  //(( aca si da el nombre de la propiedad, entonces se usa el punto))
  var producto = objetoMisterioso.numeroMisterioso * 5 //se guarda en la variable producto
   return producto;
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation (son los [])
  // Devuelve el objeto
  // Tu código:
delete objeto[unaPropiedad];
return objeto;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:
var object={
  nombre: nombre,
  email: email,
  password: password,
}
return object;
}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email){ //usuario y el nombre de la propiedad
return true;
  } else {
    return false;
  }
}


function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  if (objeto[propiedad]){ //se usan los corchetes porquer no se sabe el nombre de la propiedad
return true;
}
  return false;
}


function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if (usuario.password === password) {
    return true;
  }
  return false;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = nuevaPassword //hace ref al ej anteior. Asi se cambia el valor.
  return usuario;
}


function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
usuario.amigos.push(nuenoAmigo); // los arreglos tienen un metodo (push) para agregar un elemento al final.
return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  // al ser array, usuario va con corchete, la propiedad  del objeto va adentro entre llaves
  //para recorrer un onbjeto o arreglo se usa un bucle: for o while
  
  for(var i=0; i < usuarios.length; i++){  //se empieza a recorrer desde el indice 0 del array. y la segunda parte dice: que el indice va a ir hasta: la longitud total del array(usuario); y por ultimo se incrementa 1 a 1
usuarios[i].esPremiun = true; //se ubica en el primer objeto   (xq i = 0). con el punto se accede a la propiedad espremiun.
  }  
  return usuarios;
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  var suma= 0;
  for (var i = 0; i < usuario.posts.length; i++){  //post es el arreglo // i++ es para que vaya pasando de un indice al siguiente
suma = suma + usuario.posts[i].likes; // x cada indice va sumando. a suma(o sea 0) se le agrega el like que encuentra en el objeto.
}  
return suma;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  //cuando habla de metodo habla de funcion, cuando es objeto
producto.calcularPrecioDescuento = function(){
 var descuento = 0;
  descuento = this.precio * this.porcentajeDeDescuento
  var nwPrice = this.precio - descuento //this hace referencia al objeto (producto)
  return nwPrice;
}
return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};
