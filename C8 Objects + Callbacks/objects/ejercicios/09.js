function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var objeto={};
  objeto.nombre=nombre;
  objeto.email=email;
  objeto.password=password;
  return objeto;
}
//otra forma de hacerlo

//   var objeto = {};
//   objeto["nombre"] = nombre;
//   objeto["email"] = email;
//   objeto["password"] = password;
//   return objeto;
// }

module.exports = nuevoUsuario;
