const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "QUANTOS MAGOS FORAM VISITAR JESUS EM SEU NASCIMENTO ?",
        alternativas: [
            "5.",
            "3."
        ]
    },
    {
        enunciado: "QUAL ERA A PROFISSÃO DO PAI DE JESUS ?",
        alternativas: [
            "Carpinteiro.",
            "Pescador."
        ]
    },
    {
        enunciado: "QUAL FOI O LIVRO QUE JESUS ESCREVEU ?",
        alternativas: [
            "BIblía.",
            "Alcorão."
        ]
    },
    {
        enunciado: "QUANTOS DISCÍPULOS JESUS TINHA ?",
        alternativas: [
            "12.",
            "11."
        ]
    },
    {
        enunciado: "QUAL A CIDADE QUE JESUS NASCEU ?",
        alternativas: [
            "Jerusalém.",
            "Belém."
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();