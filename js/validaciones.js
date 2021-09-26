/* Traigo elementos del documento y los transformo en variables*/

var correo = document.getElementById('campoCorreo');
var usuario = document.getElementById('campoUsuario');
var clave = document.getElementById('campoContrasena');

/* Creo 2 variables de expresiones regulares. La primera valida que contenga arroba@ y que termine en 
.com .co .org o .es. La segunda solo valida que inicie con letra Mayúscula*/

var regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[com|co|org|es]+$/;      
var regex2 = /[A-Z]\S*/; 

/* Creo la primera función para validar el correo. la llamo literalmente "function validar_correo(string)"
para evitar cualquier error. Explicación de (!variableCorreo.value.match(regexCorreo)): El símbolo "!" es el operador 
lógico NOT, y lo utilizo para negar la variable "variableCorreo". Luego reviso con .value.match(regexCorreo) que cumpla 
con los criterios de la expresión regular y le pido que me arroje la alerta si no se cumple algún criterio */

function validar_correo(string) {
    if (!correo.value.match(regexCorreo))  { alert("Correo Inválido"); } 
      else if (correo.value.length <15 || correo.value.length>40)  { alert("Correo Inválido"); } 
  }

/* Creo la segunda función que nos piden: "function validar_contrasena_usuario(string)". Uso el operador lógico OR "||" 
para los criterios de longitud ; empleo el operador NOT "!" en !usuario para que la alerta se active solamente cuando 
no se cumplan los criterios*/

function validar_contrasena_usuario(string) {

    if  (!usuario.value.match(regex2))   {   alert("Usuario inválido");  }
      else if  (usuario.value.length <6 || usuario.value.length>12)   {   alert("Usuario inválido");  }
      

    if (!clave.value.match(regex2))  {  alert("Contraseña inválida");    }
      else if  (clave.value.length <6 || clave.value.length>12)  {  alert("Contraseña inválida");    }
  }

/* Los module.exports no se que hacen, solo los puse literal como salen en el sprint*/

module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;
