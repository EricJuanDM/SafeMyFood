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
    const opcoes = document.getElementById("OpcoesdeOrganizador");

    botaoOrganizar.addEventListener("click", function () {
        if (opcoes.style.display === "none") {
            opcoes.style.display = "block";
        } else {
            opcoes.style.display = "none";
        }
    });
    
});

