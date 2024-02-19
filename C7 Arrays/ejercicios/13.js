function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  var numerosparesarray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      numerosparesarray.push(array[i]);
    }
  }
  return numerosparesarray;
}

module.exports = filtrarNumerosPares;
