function fibonacci(numero) {
    let serie = [];
    for (let i = 0; i < numero; i++) {
        if (i <= 1) {
            serie.push(i);
        } else {
            serie.push(serie[i - 1] + serie[i - 2]);
        }
    }
    return serie;
}

let resultado;

do {
    let input = prompt("Ingrese un número para calcular la serie de Fibonacci: ");
    resultado = parseInt(input);

    if (isNaN(resultado)) {
        alert("Por favor, ingrese un valor numérico válido");
    }
} while (isNaN(resultado));

document.write(`La serie de Fibonacci de ${resultado} números es: ${fibonacci(resultado).join(', ')}`);
