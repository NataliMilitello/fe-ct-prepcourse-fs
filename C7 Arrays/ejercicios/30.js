function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  for (var i = 0; i < numeros.length; i++) {
    for (var j = i + 1; j < numeros.length; j++) 
    if (numeros[i] === numeros[j]) 
    return numeros[i];
  }
}

ej: [1, 2, 3, 4, 5, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

module.exports = encontrarElementoRepetido;
