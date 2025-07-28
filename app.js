// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigoSecreto = 0;
let listaNombresAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Amigo Secreto');
    asignarTextoElemento('h2',`Digite el nombre se sus amigos`);
    nombreAmigoSecreto = generarNombreSecreto();
    console.log(numeroSecreto);
}

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
}
        // Agregar el nombre al array
    listaNombresAmigos.push(nombre);

    // Mostrar el nombre en pantalla
    mostrarNombres();

    // Limpiar el input
    input.value = "";
}

function mostrarNombres() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar antes de volver a escribir

    listaNombresAmigos.forEach(function(nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    // Validar que la lista no esté vacía
    if (listaNombresAmigos.length === 0) {
        alert("Agregá al menos un amigo antes de sortear.");
        return;
    }

    // Obtener el nombre sorteado usando tu otra función
    let nombre = sortearNombre();

    // Mostrarlo en pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${nombre}</strong></li>`;
}

function sortearNombre () {
    let cantidad = listaNombresAmigos.length;
    let numeroAleatorio = Math.floor(Math.random() * cantidad);
    let nombreGenerado = listaNombresAmigos[numeroAleatorio];
    return nombreGenerado;
}

