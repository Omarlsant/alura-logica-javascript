// Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let num = prompt('Escribe un número positivo o negativo');
if (num > 0) {
    alert('Número positivo');
} else if (num < 0) {
    alert('Número negativo');
} else {
    alert('El número es cero');
}