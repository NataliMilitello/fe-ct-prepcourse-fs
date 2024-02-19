/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  var arrayPadre = [];
  for (var propiedad in objeto) {
    var array = [propiedad, objeto[propiedad]];
    arrayPadre.push(array);
  }
  return arrayPadre;
}

function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  var arrayString = string.split("");
  var objeto = {};
  for (var i = 0; i < arrayString.length; i++) {
    if (objeto[arrayString[i]]) {
      objeto[arrayString[i]] += 1;
    } else {
      objeto[arrayString[i]] = 1;
    }
  }
  return objeto;
}

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  var arrayString = string.split("");
  var arrayMayusculas = [];
  var arrayMinusculas = [];

  for (var i = 0; i < arrayString.length; i++) {
    if (arrayString[i] === arrayString[i].toUpperCase()) {
      arrayMayusculas.push(arrayString[i]);
    } else {
      arrayMinusculas.push(arrayString[i]);
    }
  }
  var stringFinal1 = arrayMayusculas.join("");
  var stringFinal2 = arrayMinusculas.join("");
  return stringFinal1 + stringFinal2;
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  var arrayDeFrase = frase.split(" ");

  var fraseInvertida = [];
  for (var i = 0; i < arrayDeFrase.length; i++) {
    var arrayDePalabras = arrayDeFrase[i].split("");
    arrayDePalabras.reverse();
    var palabraInvertida = arrayDePalabras.join("");
    fraseInvertida.push(palabraInvertida);
  }
  return fraseInvertida.join(" ");
}

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  var numeroString = numero.toString();
  var arrayDeString = numeroString.split("");
  var arrayInvertido = arrayDeString.reverse();
  var stringInvertido = arrayInvertido.join("");
  if (stringInvertido === numeroString) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  var arrayString = string.split("");
  for (var i = 0; i < arrayString.length; i++) {
    if (arrayString[i] === "a" || arrayString[i] === "b" || arrayString[i] === "c") {
      arrayString.splice(i, 1);
      i--;
    }
  }
  var nuevoString = arrayString.join("");
  return nuevoString;
}

function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  arrayOfStrings.sort(function (a, b) {
    return a.length - b.length;
  });
  return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  var interseccion = [];
  for (var i = 0; i < array1.length; i++)
    for (var j = 0; j < array2.length; j++)
      if (array1[i] === array2[j]) {
        interseccion.push(array1[i]);
      }
  return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
