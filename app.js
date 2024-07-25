let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento,texto) {
    let elementoHTML =  document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroSecreto);
    if (numeroDeUsuario == numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? `vez` : `veces`}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acertó
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(ListaNumerosSorteados);

    if (ListaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',`Ya se sortearon los números posibles`);
    } else {
        if (ListaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            ListaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarjuego() {
    //limpiar caja
    limpiarCaja();
    //mensaje de intervalos de numeros
    //generar número aleatorio
    //inicializar el número intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();