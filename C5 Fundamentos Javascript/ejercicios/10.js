function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  if (!(fecha instanceof Date)) {
    return false;
  }

  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const año = fecha.getFullYear();

  return año === fecha.getFullYear() && mes === fecha.getMonth() + 1 && dia === fecha.getDate();
}



module.exports = esFechaValida;

//Otra forma:

//if (fecha instanceof Date && !isNaN(fecha)) {
  //return true;
//} else {
  //return false;
//}