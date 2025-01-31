// Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". En caso contrario, muestra "¡Buena semana!".

let diaDeSemana = prompt('¿Qué día de la semana es?');
if (diaDeSemana === 'Sábado' || diaDeSemana === 'sábado' || diaDeSemana === 'Domingo' || diaDeSemana === 'domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}