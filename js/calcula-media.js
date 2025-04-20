let btnCalcularMedia = document.getElementById("btn-calcular-media");
let btnLimpar = document.getElementById("btn-limpar");
let divBotoes = document.getElementById("div-botoes");

function calcularMedia(primeiraNota, segundaNota) {
    return parseFloat((primeiraNota + segundaNota) / 2).toFixed(2);
}

btnCalcularMedia.addEventListener("click", function () {
    let primeiraNota = parseFloat(document.getElementById("primeira-nota").value);
    let segundaNota = parseFloat(document.getElementById("segunda-nota").value);

    let formFloating = document.createElement("div");
    formFloating.className = "form-floating";

    let input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
    input.id = "media";
    input.value = calcularMedia(primeiraNota, segundaNota);
    input.readOnly = true;

    let label = document.createElement("label");
    label.htmlFor = "media";
    label.textContent = "Média";

    formFloating.appendChild(input);
    formFloating.appendChild(label);
    divBotoes.parentNode.insertBefore(formFloating, divBotoes);
});

btnLimpar.addEventListener("click", function () {
    document.getElementById("primeira-nota").value = "";
    document.getElementById("segunda-nota").value = "";

    let mediaInput = document.getElementById("media");
    if (mediaInput) {
        mediaInput.parentNode.remove();
    }
});
