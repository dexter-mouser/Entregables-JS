function validarAcceso() {
    const USUARIO_CORRECTO = "admin";
    const CONTRASENA_CORRECTA = "1234";
    //
    const MAX_INTENTOS = 3;
    let intentos = 0;
    let acceso = false;
    //
    while (intentos < MAX_INTENTOS && !acceso) {
    //
    const usuarioIngresado = prompt("Ingresa tu usuario:");
    const contrasenaIngresada = prompt("Ingresa tu contraseña:");
    //
    intentos++;
    //
    if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {
      acceso = true;
      const mensaje = "¡Bienvenido al sistema!";
      console.log(mensaje);
      alert(mensaje);
    } else if (intentos < MAX_INTENTOS) {
      const mensaje = `Datos incorrectos. Intento ${intentos} de ${MAX_INTENTOS}.`;
      console.log(mensaje);
      alert(mensaje);
    } else {
      const mensaje = "Usuario bloqueado. Ha superado el número de intentos.";
      console.log(mensaje);
      alert(mensaje);
    }
  }
}
// Sintaxis ¿?
validarAcceso();