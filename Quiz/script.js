const perguntas = [{
        pergunta: "O que é empatia no atendimento?",
        opcoes: [
            "Ouvir o cliente sem interromper",
            "Falar com autoridade",
            "Garantir a venda a qualquer custo",
            "Transferir para outro setor"
        ],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual destas práticas melhora o suporte técnico?",
        opcoes: [
            "Falar termos técnicos sem explicar",
            "Culpar o cliente",
            "Usar linguagem clara e acessível",
            "Responder apenas com emojis"
        ],
        respostaCorreta: 2
    },
    {
        pergunta: "Como agir diante de um cliente insatisfeito?",
        opcoes: [
            "Ignorar o problema",
            "Ouvir com atenção e oferecer soluções",
            "Dizer que ele está errado",
            "Encerrar o atendimento rapidamente"
        ],
        respostaCorreta: 1
    }
];

let indiceAtual = 0;

const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const resultadoEl = document.getElementById("resultado");
const btnProxima = document.getElementById("btnProxima");

function carregarPergunta() {
    const atual = perguntas[indiceAtual];
    perguntaEl.textContent = atual.pergunta;
    opcoesEl.innerHTML = "";
    resultadoEl.textContent = "";
    btnProxima.style.display = "none";

    atual.opcoes.forEach((opcao, index) => {
        const botao = document.createElement("button");
        botao.textContent = opcao;
        botao.classList.add("opcao");
        botao.onclick = () => verificarResposta(index);
        opcoesEl.appendChild(botao);
    });
}

function verificarResposta(selecionada) {
    const correta = perguntas[indiceAtual].respostaCorreta;
    if (selecionada === correta) {
        resultadoEl.textContent = "✅ Resposta correta!";
    } else {
        resultadoEl.textContent = "❌ Resposta incorreta.";
    }
    btnProxima.style.display = "block";
}

btnProxima.onclick = () => {
    indiceAtual++;
    if (indiceAtual < perguntas.length) {
        carregarPergunta();
    } else {
        perguntaEl.textContent = "Quiz finalizado!";
        opcoesEl.innerHTML = "";
        resultadoEl.textContent = "Obrigada por participar!";
        btnProxima.style.display = "none";
    }
};

carregarPergunta();