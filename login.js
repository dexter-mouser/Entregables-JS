function validarAcceso() {
    const USUARIO_CORRECTO = "admin";
    const CONTRASENA_CORRECTA = "1234";
    const MAX_INTENTOS = 3;
    let intentos = 0;
    let acceso = false;

    while (intentos < MAX_INTENTOS && !acceso) {
        const usuarioIngresado = prompt("Ingresa tu usuario:");
        if (usuarioIngresado === null) {
            alert("Inicio de sesión cancelado.");
            return;
        }

        const contrasenaIngresada = prompt("Ingresa tu contraseña:");
        if (contrasenaIngresada === null) {
            alert("Inicio de sesión cancelado.");
            return;
        }

        intentos++;

        if (usuarioIngresado === USUARIO_CORRECTO && contrasenaIngresada === CONTRASENA_CORRECTA) {
            acceso = true;
            alert("¡Bienvenido al sistema!");
        } else if (intentos < MAX_INTENTOS) {
            alert(`Datos incorrectos. Intento ${intentos} de ${MAX_INTENTOS}.`);
        } else {
            alert("Usuario bloqueado. Ha superado el número de intentos.");
        }
    }
}