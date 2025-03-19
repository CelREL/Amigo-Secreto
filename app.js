// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo =[];

function agregarAmigo() {
    let inputAmigo =document.getElementById("amigo");
    let nombre = inputAmigo.value;


    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    amigo.push(nombre);
    inputAmigo.value = "";
    inputAmigo.focus();
    renderizarAmigos();  
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement("li");
        item.textContent = amigo[i];
        listaAmigos.appendChild (item);
    }  
}

function sortearAmigo(){
    if (amigo.length === 0) {
        alert("No hay amigos para sortear")
        return;
    }
    let amigosSorteados = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigosSorteados}`; 

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = ""; 

}