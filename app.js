const botao = document.querySelector(".btn");

botao.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");

    let temaAtual = document.body.className;

    if (temaAtual === "dark-theme") {
        botao.textContent = "Claro";
    } else {
        botao.textContent = "Escuro";
    }

    console.log("Tema atual: " + temaAtual);
});