// Do not change any of the function names

function mayuscula(nombre) {
  //La función recibe un nombre y debe devolver el mismo que recibe pero con su primer letra en mayúscula
  //ej: Recibe "mario" ----> Devuelve "Mario"
  //Tu código:
  //la forma de obtener un elemento de un array es:
  return nombre[0].toUpperCase() + nombre.slice(1);   //se tom a la primera letra(por eso el 0) y se le suma el resto con: + nombre.slice(1) -> el 1 es para que devuelva todos menos el primer elemento (en este caso la m) lo que quita es lo que esta en el indice que se indica
}

function invocarCallback(cb) {
  // Invoca al callback `cb`
  //Tu código:
  //callback es cuando te pasan una funcion como argumento y para invocarla se hace:
  cb()
}

function operacionMatematica(n1, n2, cb) {
  //Vamos a recibir una función que realiza una operación matemática como callback junto con dos números.
  //Devolver el callback pasándole como argumentos los números recibidos.
  //Tu código:
  return cb(n1, n2) //se pasan los argumentos de la operacion al cb
}

function sumarArray(numeros, cb) {
  // Suma todos los números enteros (int/integers) de un array ("numeros")
  // Pasa el resultado a `cb`
  // No es necesario devolver nada
  //Tu código:
numeros.reduce(function(acc, elemento){  //reduce es un metodo de los array que recibe 2 argumentos, 1 funcion cb y un valor inicializador (un acumulador que se pasa como aergumento a la funcion)
  var sum = acc + elemento     //siempre que se usa reduce hay que hacer una variable
  return sum
}, 0) // el ultimo 0 es para que el acumulador inicie en 0, que no sume nada al array.
cb(suma)
} //al acumulador se le vca sumando el elemento


function forEach(array, cb) {
  // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
  // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)
  //Tu código:
  //for each es una funcion de los array al que se le especifica una funcion y esa func lo va a hacer por cada elemento del array.
//tmb es un metodo de los array
array.forEach(function(el){return cb(el)})  // el: es cada elemento del array
} 

function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código:
  //map es una funcion que permite recorrer el arreglo y recibe tmb una funcion cb(func que se usa en un argumento en otra func, map hace lo mismo).
var newArray = [];
array.map(function(el){newArray.push(cb(el))})
return newArray;
}

function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  
  var newArray = array.filter(function(el){
    if(el[0] === "a") //con el [] se accede a cada elemento del arreglo. (por eso el indice)
  return el
  })
  return newArray;
}
//la funcion filter modifica sin tener que pushar. Retorna el nuevo arreglo ya filtrado.
// Para modificar todo lo del array se usa .map y .foreach es como un for comun (no se puede salir, sigue con cada elemento, no se usa con return)
// La flecha : => reemplaza la palabra function.
// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter
};
