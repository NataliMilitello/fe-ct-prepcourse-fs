function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var fechaActual = new Date();

  var edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

  if (edad > 18) {
    return true;
  } else if (edad === 18) {
    var mesNac = fechaNacimiento.getMonth();
    var diaNac = fechaNacimiento.getDate();
    var mesActual = fechaActual.getMonth();
    var diaActual = fechaActual.getDate();

    if (mesActual > mesNac) {
      return true;
    } else if (mesActual === mesNac) {
      return diaActual >= diaNac;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

module.exports = esMayorDeEdad;
