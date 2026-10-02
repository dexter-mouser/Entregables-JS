function ejecutarJS() {
    let opcion;

    do {
        opcion = prompt(
            "Simulador MENU\n" +
            "1. Consultar Saldo\n" +
            "2. Retirar Saldo\n" +
            "3. Salir\n\n" +
            "Seleccione una opción: "
        );

        if (opcion === null) {
            alert("Menú cerrado.");
            return;
        }

        switch (opcion) {
            case "1":
                alert("Su saldo es: $1000");
                break;
            case "2":
                alert("Dinero retirado.");
                break;
            case "3":
                alert("Gracias por usar el sistema.");
                break;
            default:
                alert("Opción no válida. Seleccione 1, 2 o 3.");
        }
    } while (opcion !== "3");
}

function multiplicar() {
    const entrada1 = prompt("Ingrese el primer número:");
    if (entrada1 === null) {
        return;
    }

    const entrada2 = prompt("Ingrese el segundo número:");
    if (entrada2 === null) {
        return;
    }

    const numero1 = Number(entrada1.trim());
    const numero2 = Number(entrada2.trim());

    if (entrada1.trim() === "" || entrada2.trim() === "" ||
        !Number.isFinite(numero1) || !Number.isFinite(numero2)) {
        alert("Ingrese números válidos.");
        return;
    }

    const resultado = numero1 * numero2;
    alert(`El resultado de la multiplicación es: ${resultado}`);
}