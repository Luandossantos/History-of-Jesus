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
                afirmacao: "FALSA, NÃO FOI DESTA VEZ ESTAVAM PRESENTES EM SEU NASCIMENTO 3 REIS MAGOS;"
            },
            {
                texto: "3",
                afirmacao: "VERDADEIRO,ISTO MESMO ESTAVAM PRESENTES NO NASCIMENTO DO MENINO JESUS 3 REIS MAGOS;"
            }
        ]
    },
    {
        enunciado: "QUAL ERA A PROFISSÃO DO PAI DE JESUS ?",
        alternativas: [
            {
                texto: "Carpinteiro",
                afirmacao: "Verdadeira, a profissão do pai de Jesus era carpinteiro;"
            },
            {
                texto: "Pescador",
                afirmacao: "Falsa, a profissão do pai de Jesus era carpinteiro e não pescador;"
            }
        ]
    },
    {
        enunciado: "QUAL FOI O LIVRO QUE JESUS ESCREVEU ?",
        alternativas: [
            {
                texto: "Biblía",
                afirmacao: "FALSA, O LIVRO QUE JESUS ESCREVEU NÃO FOI A BIBLÍA E SIM ALCORÃO;"
            },
            {
                texto: "Alcorão",
                afirmacao: "VERDADEIRA, ISTO MESMO! O LIVRO QUE JESUS CRISTO ESCREVEU FOI O ALCORÃO;"
            }
        ]
    },
    {
        enunciado: "QUANTOS DISCÍPULOS JESUS TINHA ?",
        alternativas: [
            {
                texto: "12",
                afirmacao: "Verdadeira, exato! Jesus tinha 12 discípulpos; "
            },
            {
                texto: "11",
                afirmacao: "Falsa, não foi desta vez... Jesus tinha 12 discípulos;"
            }
        ]
    },
    {
        enunciado: "QUAL A CIDADE QUE JESUS NASCEU ?",
        alternativas: [
            {
                texto: "Jerusalém",
                afirmacao: "FALSA, JESUS NASCEU NA CIDADE DE BELÉM."
            },
            {
                texto: "Belém",
                afirmacao: "VERDADEIRA, JESUS NASCEU NA CIDADE DE BELÉM."
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