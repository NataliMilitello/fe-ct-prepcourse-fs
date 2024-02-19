function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  var arraynumerosmayoresa10 = [];
  for (i = 0; i < array.length; i++)
    if (array[i] > 10) {
      arraynumerosmayoresa10.push(array[i]);
    }
  return arraynumerosmayoresa10.length;
}

module.exports = contarElementosMayoresA10;
