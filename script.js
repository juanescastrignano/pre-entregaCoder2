// Función para capturar entrada y calcular descuento
function simularDescuentos() {
    const precioOriginalInput = document.getElementById("original-price");
    const descuentoPorcentajeInput = document.getElementById("discount-percentage");

    const precioOriginal = parseFloat(precioOriginalInput.value);
    const descuentoPorcentaje = parseFloat(descuentoPorcentajeInput.value);

    if (isNaN(precioOriginal) || isNaN(descuentoPorcentaje)) {
        alert("Ingrese valores numéricos válidos.");
        return;
    }

    const descuento = (precioOriginal * descuentoPorcentaje) / 100;
    const precioConDescuento = precioOriginal - descuento;

    mostrarResultados(precioOriginal, descuento, precioConDescuento);
}

// Función para mostrar resultados
function mostrarResultados(precioOriginal, descuento, precioConDescuento) {
    const originalPriceResult = document.getElementById("original-price-result");
    const discountResult = document.getElementById("discount-result");
    const finalPriceResult = document.getElementById("final-price-result");

    originalPriceResult.textContent = "Precio original: $" + precioOriginal.toFixed(2);
    discountResult.textContent = "Descuento: $" + descuento.toFixed(2);
    finalPriceResult.textContent = "Precio con descuento: $" + precioConDescuento.toFixed(2);

    const resultsContainer = document.getElementById("results");
    resultsContainer.classList.remove("hidden");
}

// Obtener referencia al botón y agregar el manejador de evento
const calculateButton = document.getElementById("calculate-button");
calculateButton.addEventListener("click", simularDescuentos);

