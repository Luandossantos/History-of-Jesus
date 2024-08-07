const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "QUANTOS MAGOS FORAM VISITAR JESUS EM SEU NASCIMENTO ?",
        alternativas: [
            {
                texto: "5",
                afirmacao: "FALSA,"
            },
            {
                texto: "3",
                afirmacao: "VERDADEIRA,"
            }
        ]
    },
    {
        enunciado: "QUAL ERA A PROFISSÃO DO PAI DE JESUS ?",
        alternativas: [
            {
                texto: "Carpinteiro",
                afirmacao: "VERDADEIRA,"
            },
            {
                texto: "Pescador",
                afirmacao: "FALSA,"
            }
        ]
    },
    {
        enunciado: "QUAL FOI O LIVRO QUE JESUS ESCREVEU ?",
        alternativas: [
            {
                texto: "Biblía",
                afirmacao: "FALSA,"
            },
            {
                texto: "Alcorão",
                afirmacao: "VERDADEIRA,"
            }
        ]
    },
    {
        enunciado: "QUANTOS DICÍPULOS JESUS TINHA ?",
        alternativas: [
            {
                texto: "12",
                afirmacao: "VERDADEIRA,"
            },
            {
                texto: "11",
                afirmacao: "FALSA,"
            }
        ]
    },
    {
        enunciado: "QUAL A CIDADE QUE JESUS NASCEU ?",
        alternativas: [
            {
                texto: "Jerusalém",
                afirmacao: "FALSA,"
            },
            {
                texto: "Belém",
                afirmacao: "VERDADEIRA,"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "SEUS RESULTADOS:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();