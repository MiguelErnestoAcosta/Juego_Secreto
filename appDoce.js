let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto); //Para saber por consola cual es el número secreto  desde el inicio

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return; //Aca no retorna nada
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos); //para ver cuantos intentos van a medida que oprimo el boton "Intentar"
    // === triple igual compara tanto el valor de los elementos como el tipo de dato al que corresponden
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //? equivalente al if. Evalua si la condicion se cumple coloca 'vez' si no, coloca 'veces'
        //Al ganar el juego se activa el botón 'Nuevo Juego'
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        // El usuario no acerto.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

//Primera Forma de limpiar una caja de texto
/*
function limpiarCaja() {
    let valorCaja = document.querySelector('#valorUsuario'); //Obtengo el valor de la caja usando queryselector sobre el ID del elemento. Se coloca # al inicio para identificar que vamos a trabajar con el ID del elemento.
    valorCaja.value = '';
}
*/

//Segunda Forma de limpiar una caja de texto
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);  // saber el  valor del numero generado y los valores que hay en la lista
    console.log(listaNumerosSorteados);
    
    // Si ya soreteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo ){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');

    } else {
        if(listaNumerosSorteados.includes(numeroGenerado)){   //Si el numero generado se encuentra dentro de la lista
            return generarNumeroSecreto();  // Llama nuevamente un nuevo numero secreto

        }else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto actualizado!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();

    //Indicar mensaje de intervalo de números
    //Generar el número aleatorio
    //Inicializar el número de intentos
    condicionesIniciales();

    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', true) //2 parametros coloca esto con tal valor seteamos disabled con el valor true
    
}

condicionesIniciales();


/*
implementar una función que reciba como parámetro un número entero y muestre un mensaje en la consola según las siguientes reglas:

Si el número es mayor que cero, el mensaje debe ser: "El número es positivo."
Si el número es menor que cero, el mensaje debe ser: "El número es negativo."
Si el número es igual a cero, el mensaje debe ser: "El número es cero."
*/
/*
function verifica(entero) {
    
    if (entero == 0){
        return console.log('El numero es cero');
    } else if (entero > 0){
        return console.log('El número es positivo');
    } else {
        return console.log('El número es Negativo');
    }
    
}
verifica(-63);

*/
