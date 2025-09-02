document.addEventListener("DOMContentLoaded", function () {
    const botoesRemover = document.querySelectorAll(".remover");

    botoesRemover.forEach(botao => {
        botao.addEventListener("click", function () {
            const item = botao.closest(".item1"); 
            const quantidadeElemento = item.querySelector(".quantidade");

            let quantidade = parseInt(quantidadeElemento.textContent.replace("x", ""));
            quantidade--;

            if (quantidade <= 0) {
                item.remove(); 
            } else {
                quantidadeElemento.textContent = `x${quantidade}`; 
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const botaoOrganizar = document.getElementById("botaoOrganizar");
    const opcoesOrganizador = document.getElementById("OpcoesdeOrganizador");

    botaoOrganizar.addEventListener("click", function () {
        opcoesOrganizador.style.display = (opcoesOrganizador.style.display === "none") ? "block" : "none";
    });
});

function organizarLista() {
    const criterio = document.getElementById("criterio").value;
    const lista = document.querySelectorAll(".item1");

    
    const arrayLista = Array.from(lista);

    arrayLista.sort((a, b) => {
        const nomeA = a.querySelector(".comida").textContent.trim().toLowerCase();
        const nomeB = b.querySelector(".comida").textContent.trim().toLowerCase();

        const validadeA = a.querySelector(".validade").textContent.trim().split("/").reverse().join("-");
        const validadeB = b.querySelector(".validade").textContent.trim().split("/").reverse().join("-");

        const quantidadeA = parseInt(a.querySelector(".quantidade").textContent.replace("x", ""));
        const quantidadeB = parseInt(b.querySelector(".quantidade").textContent.replace("x", ""));

        switch (criterio) {
            case "Alfa":
                return nomeA.localeCompare(nomeB);
            case "validade":
                return validadeA.localeCompare(validadeB);
            case "quantidade":
                return quantidadeB - quantidadeA; 
            default:
                return 0;
        }
    });

    const container = document.querySelector(".itemArea");
    container.innerHTML = ""; 
    arrayLista.forEach(item => {
        container.appendChild(item); 
    });
}

