function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  var suma = arrayOfNums.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
  });
  return suma;
}
module.exports = agregarNumeros;
