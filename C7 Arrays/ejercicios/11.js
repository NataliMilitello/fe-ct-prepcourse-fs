function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  var arrayduplicado = [];
  for (var i = 0; i < array.length; i++) {
    arrayduplicado.push(array[i] * 2);
  }
  return arrayduplicado;
}

module.exports = duplicarElementos;
