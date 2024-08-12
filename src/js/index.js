const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        desmarcarBotaoSelecionado();
       
       marcarBotaoSelecionado(botao);

       esconderImagemAtiva();

       mostrarImagemDeFundo(indice);

       esconderInformacoesAtiva();

      mostrarInformacoes(indice);

    });
});

function desmarcarBotaoSelecionado() {
    const botaoSelecionado = desativarBotaoSelecionado();
    botaoSelecionado.classList.remove("selecionado");
}

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtiva() {
    const informacaoAtiva = document.querySelector(".informacoes.ativa");
    informacaoAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    return document.querySelector(".selecionado");
}

