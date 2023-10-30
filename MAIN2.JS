function alterarConteudo() {
    var elemento = document.getElementById("elementoID");
    elemento.textContent = "olaaaaaaaaaaaaaa";
}

function adicionarClasse() {
    var elemento = document.getElementById("elementoID");
    elemento.classList.add("minha-classe");
}

function removerClasse() {
    var elemento = document.getElementById("elementoID");
    elemento.classList.remove("minha-classe");
}

function adicionarEvento() {
    var elemento = document.getElementById("elementoID");
    elemento.addEventListener("click", function () {
        alert("Cliquei no elemento!");
    });
}

function redirecionar() {
    window.location.href = "https://www.example.com";
}

function exibirAlerta() 
    alert("Isso é um alerta!")