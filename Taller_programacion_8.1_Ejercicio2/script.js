function mostrarLista() {
    const valor = parseInt(document.getElementById("valor").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(valor) || valor < 0) {
        resultado.innerHTML = "Por favor, ingresa un número entero positivo.";
        return;
    }

    let lista = "";
    for (let i = 0; i <= valor; i++) {
        lista += i;
        if (i < valor) {
            lista += ", ";
        }
    }

    resultado.innerHTML = lista;
}