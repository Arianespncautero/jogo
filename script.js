const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const alternativas = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativa: [
            {
                texto: "Ninguém mais passa fome",
                afirmacao: "Mas todas as algas morrem",
            },
            {
                texto: "Ter uma Pizza Infinita",
                afirmacao: "Mas transmitir doenças com um toque",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "O conflito Rússia x Ucrânia é solucionado",
                afirmacao: "mas itália deixa de existir",
            },
            {
                texto: "",
                texto: "o conflito da faixa de gaza é resolvido ",
                afirmacao: "mas uma bomba cai na África",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "possuir tecnologia alienígena",
                afirmacao: "mas ela será decoberta",
            },
            {
                texto: "ter 1 pokémon de sua escolha na vida real",
                afirmacao: "mas 5 crianças haitianas morrem brutalmente na sua frente",
            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPerguntas (){
    if(atual>= alternativas.length){
        mostrarResultado();
        return;
    }
    perguntaAtual = alternativas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const opcao of perguntaAtual.alternativa) {
        const botaoAlternativa = document.createElement('button');
        botaoAlternativa.textContent = opcao.texto;
        botaoAlternativa.addEventListener("click", ()=> respostaSelecionada(opcao));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcao){
    const afirmacoes = opcao.alternativas;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPerguntas();
}

function mostrarResultado (){
    caixaPerguntas.textContent = "Em resumo você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPerguntas();