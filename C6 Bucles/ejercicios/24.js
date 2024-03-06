function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:
  
var textoInvertido = "";
for (var i = texto.length - 1; i >= 0; i--) {
textoInvertido = textoInvertido + texto[i];
}
return textoInvertido;
}

//Otro forma:
//var arreglo = texto.split("");
//var arregloInvertido = [];
//for (var i = 0; i < arreglo.length; i++) {
  //arregloInvertido.unshift(arreglo[i]);
//}
//var textoInvertido = arregloInvertido.join("");
//return textoInvertido;
module.exports = invertirTexto;
