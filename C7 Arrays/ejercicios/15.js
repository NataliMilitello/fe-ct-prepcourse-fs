function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  if (array.length === 0 || array.length === 1) {
    return 0;
  }

  var valorMaximo = array[0];
  let indice = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > valorMaximo) {
      valorMaximo = array[i];
      indice = i;
    }
  }
  return indice;
}

module.exports = encontrarIndiceMayor;
