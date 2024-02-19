function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = resultadosTest.reduce(function (acumulador, elemento) {
    return acumulador + elemento;
  });
  var promedio = suma / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;
