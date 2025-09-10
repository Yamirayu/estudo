const dialogo = document.getElementById("dialogo");
const opcoes = document.getElementById("opcoes");

let etapa = 0;
const cenas = [
  {
    texto: "Você chega na escola e vê Erik te esperando. O que você faz?",
    visual: "inicio",
    opcoes: [
      { texto: "Fala com Erik", proxima: 1 }, // Vai para cena 1: conversa com Erik
      { texto: "Ignora e vai pra aula", proxima: 3 } // Vai para cena 3: aula de HTML
    ]
  },
  {
    texto: "Erik sorri e começa a conversar.",
    visual: "inicio",
    opcoes: [
      { texto: "Convida para sair", proxima: 2 }, // Vai para cena 2: marcar encontro
      { texto: "Falar sobre programação", proxima: 4 } // Vai para cena 4: pergunta fácil sobre programação
    ]
  },
  {
    texto: "Vocês marcam de sair.",
    visual: "encontro",
    opcoes: [
      { texto: "Ir para a aula", proxima: 5 } // Vai para cena 5: pergunta sobre HTML
    ]
  },
  {
    texto: "Você vai direto pra aula. O professor começa a falar sobre HTML.",
    visual: "aula_programacao",
    opcoes: [
      { texto: "Prestar atenção", proxima: 5 }, // Vai para cena 5: pergunta sobre HTML
      { texto: "Dormir", proxima: 6 } // Vai para cena 6: bronca do professor
    ]
  },
  {
    texto: "Erik pergunta: Qual linguagem é usada para criar a estrutura básica de uma página web?",
    visual: "aula_programacao",
    opcoes: [
      { texto: "HTML", proxima: 14 }, // Vai para cena 14: resposta correta
      { texto: "Python", proxima: 15 } // Vai para cena 15: resposta errada
    ]
  },
  {
    texto: "O professor explica: HTML é a estrutura de uma página web. Agora, uma pergunta: O que significa HTML?",
    visual: "aula_programacao",
    opcoes: [
      { texto: "HyperText Markup Language", proxima: 7 }, // Vai para cena 7: resposta correta
      { texto: "High Tech Machine Learning", proxima: 6 } // Vai para cena 6: resposta errada
    ]
  },
  {
    texto: "Você errou. O professor te dá uma bronca.",
    visual: "aula_programacao",
    opcoes: [
      { texto: "Tentar a próxima pergunta", proxima: 10 } // Vai para cena 10: pergunta sobre CSS
    ]
  },
  {
    texto: "Você acertou! O professor te elogia.",
    visual: "aula_programacao",
    opcoes: [
      { texto: "Pular cenas", proxima: 8 }, // Vai para cena 8: bilhete misterioso
      { texto: "Tentar outra pergunta", proxima: 10 } // Vai para cena 10: pergunta sobre CSS
    ]
  },
  {
    texto: "Você encontra um bilhete misterioso na sua mochila. O que você faz?",
    visual: "inicio",
    opcoes: [
      { texto: "Lê o bilhete", proxima: 9 }, // Vai para cena 9: conteúdo do bilhete
      { texto: "Joga fora sem ler", proxima: 11 } // Vai para cena 11: ignora o bilhete
    ]
  },
  {
    texto: "O bilhete diz: 'Encontre-me na biblioteca às 13h. É importante.'",
    visual: "inicio",
    opcoes: []
  },
  {
    texto: "Você joga o bilhete fora. Talvez tenha perdido uma oportunidade importante.",
    visual: "inicio",
    opcoes: []
  },
  {
    texto: "O professor pergunta: Qual linguagem é usada para estilizar páginas web?",
    visual: "aula_programacao",
    opcoes: [
      { texto: "CSS", proxima: 12 }, // Vai para cena 12: resposta correta
      { texto: "Python", proxima: 13 } // Vai para cena 13: resposta errada
    ]
  },
  {
    texto: "Você acertou! CSS é usado para definir o estilo visual das páginas web.",
    visual: "aula_programacao",
    opcoes: []
  },
  {
    texto: "Você errou. Python não é usada para estilizar páginas web.",
    visual: "aula_programacao",
    opcoes: []
  },
  {
    texto: "Você acertou! HTML é usado para estruturar páginas web. Erik parece impressionado.",
    visual: "aula_programacao",
    opcoes: []
  },
  {
    texto: "Você errou. Python é uma linguagem poderosa, mas não é usada para estruturar páginas web.",
    visual: "aula_programacao",
    opcoes: []
  }
];

function mostrarCena(i) {
  const cena = cenas[i];
  dialogo.innerText = cena.texto;
  opcoes.innerHTML = "";
  cena.opcoes.forEach(op => {
    const btn = document.createElement("button");
    btn.innerText = op.texto;
    btn.onclick = () => mostrarCena(op.proxima);
    opcoes.appendChild(btn);
  });
}
function atualizarVisual(cenaId) {
  if (cenaId === "inicio") {
    document.getElementById("imagem-cenario").src = "img/escola.png";
    document.getElementById("imagem-personagem").src = "img/alex.png";
  } else if (cenaId === "aula_programacao") {
    document.getElementById("imagem-cenario").src = "img/sala.png";
    document.getElementById("imagem-personagem").src = "img/professor.png";
  } else if (cenaId === "encontro") {
    document.getElementById("imagem-cenario").src = "img/parque.png";
    document.getElementById("imagem-personagem").src = "img/alex_feliz.png";
  }
}

mostrarCena(etapa);
atualizarVisual(id);

