function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  arraynuevo = [];
  for (var i = 0; i < arrayOfStrings.length; i++) {
    if (arrayOfStrings[i].startsWith("a")) {
      arraynuevo.push(arrayOfStrings[i]);
    }
  }
   return arraynuevo;
}

module.exports = filter;
