function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  var sinEspacios = string.replace(/ /g, "");
  var sinMayusculas = sinEspacios.toLowerCase();
  var array = sinMayusculas.split("");
  var arrayInvertido = array.reverse();
  var stringInvertido = arrayInvertido.join("");

  if (sinMayusculas === stringInvertido) {
    return true;
  } else {
    return false;
  }
}

module.exports = esPalindromo;
