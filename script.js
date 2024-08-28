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
                texto: "Ninguém mais passa fome Mas todas as algas morrem",
                afirmacao: "O mundo todo morreu por falta de oxigênio",
            },
            {
                texto: "Ter uma Pizza Infinita Mas transmitir doenças com um toque",
                afirmacao: "Você se tornou uma arma bélica e será isolado",
            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativa: [
            {
                texto: "O conflito Rússia x Ucrânia é solucionado mas itália deixa de existir",
                afirmacao: "As receiras originarias de massas foram perdidas",
            },
            {
             
                texto: "O conflito da faixa de gaza é resolvido mas uma bomba cai na África",
                afirmacao: "Todos sabem que você fez esta escolha",
            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativa: [
            {
                texto: "Possuir tecnologia alienígena mas só você possuir",
                afirmacao: "Ela será descoberta",
            },
            {
                texto: "Ter 1 pokémon de sua escolha na vida real mas 5 crianças haitianas morrem brutalmente na sua frente",
                afirmacao: "Parabéns...",
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
    const afirmacoes = opcao.afirmacao;
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