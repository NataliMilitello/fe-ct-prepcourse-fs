function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  var indiceporelemento=[];
  for(var i=0; i<array.length; i++){
    indiceporelemento.push(i*array[i]);
}
return indiceporelemento;
}

module.exports = multiplicarElementosPorIndice;
