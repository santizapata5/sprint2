var variableCorreo = document.getElementById('campoCorreo');
var usuario = document.getElementById('campoUsuario');
var clave = document.getElementById('campoContrasena');

var regexCorreo = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[com|co|org|es]+$/;
var regex2 = /[A-Z]\S*/;

function validar_correo(string) {
    if (!variableCorreo.value.match(regexCorreo))  { alert("Correo Inválido"); } 
      else if (variableCorreo.value.length <15 || variableCorreo.value.length>40)  { alert("Correo Inválido"); } 
  }

function validar_contrasena_usuario(string) {
    if  (usuario.value.length <6)  {   alert("Usuario inválido");  }
      else if  (usuario.value.length>12)  {   alert("Usuario inválido");  }
      else if   (!usuario.value.match(regex2))    {   alert("Usuario inválido");  }
    if (!clave.value.match(regex2))  {  alert("Contraseña inválida");    }
      else if  (clave.length <6 || clave.length>12)  {  alert("Contraseña inválida");    }
  }

module.exports.validar_correo = validar_correo;
module.exports.validar_contrasena_usuario = validar_contrasena_usuario;
