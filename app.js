// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
const contenedorResultado = document.getElementById("resultado");

function agregarAmigo() {
    const nombreAmigo = document.getElementsByClassName("input-name")[0].value;
    
    if (nombreAmigo === "") {
        alert("Debes ingresar un nombre");
        return;
    } else if (listaAmigos.includes(nombreAmigo)) {
        alert("Este amigo ya fue ingresado");
        return;
    } else if (!isNaN(nombreAmigo)) {
        alert("El nombre no puede ser un número");
        return;
    } 
    
    listaAmigos.push(nombreAmigo);
    document.getElementsByClassName("input-name")[0].value = "";
    
    const contenedorLista = document.getElementById("listaAmigos");
    contenedorLista.innerHTML += `<li>${nombreAmigo}</li>`;
    contenedorResultado.innerHTML = "";
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista de amigos está vacía");
        return;
    } else {
        const numeroAleatorio = Math.floor(Math.random() * listaAmigos.length);
        const amigoSorteado = listaAmigos[numeroAleatorio];

        contenedorResultado.innerHTML = `<p>El amigo sorteado es: ${amigoSorteado}</p>`;
    }
}