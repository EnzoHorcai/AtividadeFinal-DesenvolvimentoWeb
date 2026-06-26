document.addEventListener("DOMContentLoaded", function () {

    const formulario = document.getElementById("formContato");
    const zonaFeedback = document.getElementById("zonaFeedback");

    if (formulario) {
        formulario.addEventListener("submit", function (evento) {

            evento.preventDefault();

            const nomeUsuario = document.getElementById("nome").value;
            const caixaSucesso = document.createElement("div");

            caixaSucesso.style.backgroundColor = "#22c55e";
            caixaSucesso.style.color = "white";
            caixaSucesso.style.padding = "15px";
            caixaSucesso.style.borderRadius = "8px";
            caixaSucesso.style.marginTop = "20px";
            caixaSucesso.style.fontWeight = "bold";
            caixaSucesso.style.textAlign = "center";
            caixaSucesso.style.maxWidth = "500px";
            caixaSucesso.textContent = `Obrigado pelo contato, ${nomeUsuario}! Mensagem enviada com sucesso.`;

            zonaFeedback.innerHTML = "";
            zonaFeedback.appendChild(caixaSucesso);

            formulario.reset();
        });
    }
});