
var formulario = document.getElementsByName('formulario')[0],  //[0] Primer elemento, el formulario en si mismo.
elementos = formulario.elements, // Elementos del form, no lo usamos en este script.
boton = document.getElementById('submit') // El botón


// --------------------------------------------------------
// Validamos Nombre los campos del formulario de contacto
// --------------------------------------------------------
var validarNombre = function (e) {
    if (formulario.nombre.value == 0) { // Si el campo id="nombre" del form está vacio...
        alert("Completa el campo nombre")
        e.preventDefault() // Evita el comportamiento por defecto
    }
}

var validarApellido = function (e) {
  if (formulario.apellido.value == 0) { // Si el campo id="nombre" del form está vacio...
      alert("Completa el campo apellido") 
      e.preventDefault() // Evita el comportamiento por defecto
  }
}

var validarDireccion = function (e) {
  if (formulario.direccion.value == 0) { // Si el campo id="nombre" del form está vacio...
      alert("Completa el campo direccion") 
      e.preventDefault() // Evita el comportamiento por defecto
  }
}

var validarCiudad = function (e) {
  if (formulario.ciudad.value == 0) { // Si el campo id="nombre" del form está vacio...
      alert("Completa el campo ciudad") 
      e.preventDefault() // Evita el comportamiento por defecto
  }
}

var validarZipcode = function (e) {
  if (formulario.zipcode.value == 0) { // Si el campo id="nombre" del form está vacio...
      alert("Completa el campo codigo postal") 
      e.preventDefault() // Evita el comportamiento por defecto
  }
}

var validarNacimiento = function (e) {
  if (formulario.nacimiento.value == 0) { // Si el campo id="nombre" del form está vacio...
      alert("Completa el campo nacimiento") 
      e.preventDefault() // Evita el comportamiento por defecto
  }
}

var validarEmail = function (e) {
  if (formulario.email.value == 0) { // Si el campo id="nombre" del form está vacio...
      alert("Completa el campo email") 
      e.preventDefault() // Evita el comportamiento por defecto
  }
}
// --------------------------------------------------------
// Se ejecuta al presionar submit e invoca a las tres validaciones
// --------------------------------------------------------
var validar = function (e) {  // "e" es el evento recibido del form 
  validarNombre(e)
  validarApellido(e)
  validarDireccion(e)
  validarCiudad(e)
  validarZipcode(e)
  validarNacimiento(e)
  validarEmail(e)
}

// --------------------------------------------------------
// Espera que se presione "enviar" y llama a "validar"
// submit es un evento DEL FORM, no del botón!
formulario.addEventListener("submit", validar)
