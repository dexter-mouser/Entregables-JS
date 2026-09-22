let opcion;

function ejecutarJS() {
    do {
        opcion = prompt(
            "Simulador MENU\n" +
            "1. Consultar Saldo\n" +
            "2. Retirar Saldo\n" +
            "3. Salir\n\n" +
            "Seleccione una opción: "
        );

        switch (opcion) {
            case "1":
                alert("Su saldo es: $1000");
                break;
            case "2":
                alert("Dinero Retirado");
                break;
            case "3":
                console.log("Gracias por usar el sistema");
                break;
            default:
                console.log("Opción no válida");
        }
    } while (opcion !== "3" && opcion !== null && opcion !== "");
}