const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPerguntas = document.querySelector ('.caixa-perguntas');
const caixaAlternativas = document.querySelector ('.caixa-alternativa');
const caixaResultado = document.querySelector ('.caixa-resultado');
const textoResultado = document.querySelector ('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa:[
            {

                texto: "Alternativa 1",
                afirmação:"Afirmação 1",
            },
            {

                texto: "Alternativa 2",
                afirmação:"Afirmação 2",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa:[
            {

                texto: "Alternativa 3",
                afirmação:"Afirmação 3",
            },
            {

                texto: "Alternativa 4",
                afirmação:"Afirmação 4",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa:[
            {

                texto: "Alternativa 5",
                afirmação:"Afirmação 5",
            },
            {

                texto: "Alternativa 6",
                afirmação:"Afirmação 6",
            },
        ]
    },
]

let atual = 0;
let PerguntaAtual;

function mostrarPerguntas (){
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = PerguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
}

mostrarPerguntas();
