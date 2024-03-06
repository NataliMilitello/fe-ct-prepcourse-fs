function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  var arrayMayusculas=[];
  for (var i=0; i<array.length; i++){
    arrayMayusculas.push(array[i].toUpperCase());
  }
  return arrayMayusculas;
}



//otra forma

  //var arrayMayuscula = [];
  //if (array.length === 0) {
    //return arrayMayuscula;
  //}
  //for (i = 0; i < array.length; i++) {
    //arrayMayuscula.push(array[i].toUpperCase());
  //}
  //return arrayMayuscula;
//}

module.exports = convertirStringAMayusculas;
