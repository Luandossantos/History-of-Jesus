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
                afirmacao:[
                     "FALSA, NÃO FOI DESTA VEZ ESTAVAM PRESENTES EM SEU NASCIMENTO 3 REIS MAGOS;",
                     "FALSA, NO NASCIMENTO DE JESUS ESTAVAM PRESENTES 3 REIS MAGOS E NÃO 5;"
                    ]
            },
            {
                texto: "3",
                afirmacao:[ 
                    "VERDADEIRO,ISTO MESMO ESTAVAM PRESENTES NO NASCIMENTO DO MENINO JESUS 3 REIS MAGOS;",
                    "VERDADEIRO, CORRETO NO NASCIMENTOS DE JESUS ESTAVAM PRESENTES 3 REIS MAGOS;"
                ]
            }
        ]
    },
    {
        enunciado: "QUAL ERA A PROFISSÃO DO PAI DE JESUS ?",
        alternativas: [
            {
                texto: "Carpinteiro",
                afirmacao: [
                    "Verdadeira, a profissão do pai de Jesus era carpinteiro;",
                    "Verdadeira, sim, o pai de Jesus era carpinteiro;"
                ]
            },
            {
                texto: "Pescador",
                afirmacao: [
                    "Falsa, a profissão do pai de Jesus era carpinteiro e não pescador;",
                    "Falsa, o pai de Jesus era um carpinteiro;"
                ]
            }
        ]
    },
    {
        enunciado: "QUANTOS DISCÍPULOS JESUS TINHA ?",
        alternativas: [
            {
                texto: "12",
                afirmacao: [
                    "Verdadeira, exato! Jesus tinha 12 discípulos;",
                    "Verdadeira, isto mesmo! tinha 12 discípulos;"
                ]
            },
            {
                texto: "11",
                afirmacao: [
                    "Falsa, não foi desta vez... Jesus tinha 12 discípulos;",
                    "Falsa, Jesus não tinha 12 discípulos e não 11;"
                ]
            }
        ]
    },
    {
        enunciado: "QUAL A CIDADE QUE JESUS NASCEU ?",
        alternativas: [
            {
                texto: "Jerusalém",
                afirmacao: [
                    "FALSA, JESUS NASCEU NA CIDADE DE BELÉM.",
                    "FALSA, JESUS NÃO NASCEU NA CIDADE DE JERUSALÉM;"
                ]
            },
            {
                texto: "Belém",
                afirmacao: [
                    "VERDADEIRA, JESUS NASCEU NA CIDADE DE BELÉM.",
                    "VERDADEIRA, CORRETO! JESUS NASCEU NA CIDADE DE BELÉM;"
                ]
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
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "SEUS RESULTADOS:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista [posicao];
}

mostraPergunta();