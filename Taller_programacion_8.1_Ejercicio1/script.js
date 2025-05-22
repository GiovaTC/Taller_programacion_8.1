function mostrarParesEImpares() {
    const cantidad = parseInt(document.getElementById('cantidad').value);

    if (isNaN(cantidad) || cantidad < 1) {
        console.log("Por favor, ingresa un número válido mayor que 0.");
        return;
    }

    for (let i = 1; i <= cantidad; i++) {
        if (i % 2 === 0) {
            console.log(`${i} es par`);
        } else {
            console.log(`${i} es impar`);
        }
    }
}