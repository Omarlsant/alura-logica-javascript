let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntento = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Indícame un número del 1 al ${numeroMaximoPosible}, por favor`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++;
        if (intentos > maximoIntento) {
            alert(`Llegaste al número máximo de ${maximoIntento} intentos.`);
            break;
        }
    }
}