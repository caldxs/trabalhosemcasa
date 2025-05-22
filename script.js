
function enviarFormulario(event) {
    event.preventDefault();
    alert("Enviado com sucesso!");
}
function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("mensagem").value = "";
}
