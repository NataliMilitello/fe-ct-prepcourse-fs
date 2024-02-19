function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  var str1Minuscula = str1.toLowerCase();
  var str2Minuscula = str2.toLowerCase();
  var sineEspacios1 = str1Minuscula.replace(/\s/g, "");
  var sineEspacios2 = str2Minuscula.replace(/\s/g, "");
  var arrayStr1 = sineEspacios1.split("");
  var arrayStr2 = sineEspacios2.split("");
  var ordenado1 = arrayStr1.sort();
  var ordenado2 = arrayStr2.sort();
  var str1Final = ordenado1.join("");
  var str2Final = ordenado2.join("");

  if (str1Final === str2Final) {
    return true;
  } else {
    return false;
  }
}

module.exports = esAnagrama;
