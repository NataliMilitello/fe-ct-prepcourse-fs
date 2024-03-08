function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  var suma = 0;

  for (var i = 0; i < resultadosTest.length; i++) {
    suma = suma + resultadosTest[i];
    var promedio = suma / resultadosTest.length;
  }
  return promedio;
}

//Otra forma de resolver:

//   var suma = resultadosTest.reduce(function (acumulador, elemento) {
//     return acumulador + elemento;
//   });
//   var promedio = suma / resultadosTest.length;
//   return promedio;
// }

module.exports = promedioResultadosTest;
