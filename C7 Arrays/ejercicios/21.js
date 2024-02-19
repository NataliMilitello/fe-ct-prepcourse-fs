function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  var mesesOrdenados = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") 
    mesesOrdenados.push(array[i]);
  }
  if (mesesOrdenados.length === 3) {
    return mesesOrdenados;
  } else {
    return "No se encontraron los meses pedidos";
  }
}

module.exports = mesesDelAño;
