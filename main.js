document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;
    alert("Nome: " + nome + "\nMensagem: " + mensagem);
});
 function mudarPlanoDeFundo() {
    // Array com cores de exemplo
    const cores  = ["#ff5733", "#33ff57", "#5733ff", "#f1c40f"];

    // Gerar um índice de cor aleatório
    const indice = Math.floor(Math.random() * cores.length);

    // Selecionar o elemento body e alterar o plano de fundo
    document.body.style.backgroundColor = cores[indice];
}
