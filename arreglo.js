function mostrarArreglos() {
    const nombre = prompt("Ingrese un nombre para agregar a la lista:");
    if (nombre === null) {
        return;
    }

    if (nombre.trim() === "") {
        alert("Ingrese un nombre válido.");
        return;
    }

    const nombres = ["Juan", "Hernan", "Daniel"];
    nombres.push(nombre.trim());

    const numeros = [1, 2, 3, 4, 5];
    const numerosDobles = numeros.map(numero => numero * 2);
    const numerosPares = numeros.filter(numero => numero % 2 === 0);

    alert(
        `Nombres: ${nombres.join(", ")}\n` +
        `Números dobles: ${numerosDobles.join(", ")}\n` +
        `Números pares: ${numerosPares.join(", ")}`
    );
}