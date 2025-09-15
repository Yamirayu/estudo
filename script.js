const dialogo = document.getElementById("dialogo");
const opcoes = document.getElementById("opcoes");

let etapa = 0;
const cenas = [
  {
    texto: "Você chega na escola e vê Erik te esperando. O que você faz?",
    visual: "inicio", // 0
    opcoes: [
      { texto: "Fala com Erik", proxima: 1 },
      { texto: "Ignora e vai pra aula", proxima: 3 }
    ]
  },
  {
    texto: "Erik sorri e começa a conversar.",
    visual: "inicio", // 1
    opcoes: [
      { texto: "Convida para sair", proxima: 2 },
      { texto: "Falar sobre programação", proxima: 4 }
    ]
  },
  {
    texto: "Vocês marcam de sair.",
    visual: "inicio", // 2
    opcoes: [
      { texto: "Ir para a aula", proxima: 5 }
    ]
  },
  {
    texto: "Você vai direto pra aula. O professor começa a falar sobre HTML.",
    visual: "aula_programacao", // 3
    opcoes: [
      { texto: "Prestar atenção", proxima: 5 },
      { texto: "Dormir", proxima: 6 }
    ]
  },
  {
    texto: "Erik pergunta: Qual linguagem é usada para criar a estrutura básica de uma página web?",
    visual: "inicio", // 4
    opcoes: [
      { texto: "HTML", proxima: 14 },
      { texto: "Python", proxima: 15 }
    ]
  },
  {
    texto: "O professor explica: HTML é a estrutura de uma página web. Agora, uma pergunta: O que significa HTML?",
    visual: "aula_programacao", // 5
    opcoes: [
      { texto: "HyperText Markup Language", proxima: 7 },
      { texto: "High Tech Machine Learning", proxima: 6 }
    ]
  },
  {
    texto: "Você errou. O professor te dá uma bronca.",
    visual: "aula_programacao", // 6
    opcoes: [
      { texto: "Tentar a próxima pergunta", proxima: 11 },
      { texto: "Dormir até a aula acabar", proxima: 18 }
    ]
  },
  {
    texto: "Você acertou! O professor te elogia.",
    visual: "aula_programacao", // 7
    opcoes: [
      { texto: "Pular cenas", proxima: 8 },
      { texto: "Tentar outra pergunta", proxima: 11 }
    ]
  },
  {
    texto: "Você sai da sala e encontra um bilhete misterioso na sua mochila. O que você faz?",
    visual: "saida-sala", // 8
    opcoes: [
      { texto: "Lê o bilhete", proxima: 9 },
      { texto: "Joga fora sem ler", proxima: 10 }
    ]
  },
  {
    texto: "O bilhete diz: 'Encontre-me na biblioteca às 13h. É importante.'",
    visual: "saida-sala", // 9
    opcoes: [
      { texto: "ir para encontro com Erik", proxima: 19 },
      { texto: "ir para biblioteca", proxima: 16 }
    ]
  },
  {
    texto: "Você joga o bilhete fora. Talvez tenha perdido uma oportunidade importante.",
    visual: "saida-sala", // 10
    opcoes: [
      { texto: "ir para encontro com Erik", proxima: 17 },
      { texto: "ficar de boa e andar pela escola", proxima: 18 }
    ]
  },
  {
    texto: "O professor pergunta: Qual linguagem é usada para estilizar páginas web?",
    visual: "aula_programacao", // 11
    opcoes: [
      { texto: "CSS", proxima: 12 },
      { texto: "Python", proxima: 13 }
    ]
  },
  {
    texto: "Você acertou! CSS é usado para definir o estilo visual das páginas web.",
    visual: "aula_programacao", // 12
    opcoes: [{ texto: "proximo", proximo: 8 }]
  },
  {
    texto: "Você errou. Python não é usada para estilizar páginas web.",
    visual: "aula_programacao", // 13
    opcoes: [{ texto: "tentar de novo", proximo: 11 },
    { texto: "voltar a dormir até acabar a aula", proximo: 18 }
    ]
  },
  {
    texto: "Você acertou! HTML é usado para estruturar páginas web. Erik parece impressionado.",
    visual: "inicio", // 14
    opcoes: [
      { texto: "Ignora e vai pra aula", proxima: 3 }
    ]
  },
  {
    texto: "Você decide ignorar Marcos e sai da biblioteca.",
    visual: "biblioteca", // 15
    personagem: "img/marcos.png",
    opcoes: [
      { texto: "Voltar para o corredor", proxima: 3 }
    ]
  },
  {
    texto: "Você vê Marcos na biblioteca te esperando.",
    visual: "biblioteca", // 16
    opcoes: [
      { texto: "Dar meia volta e ignorar Marcos", proxima: 15 },
      { texto: "Falar com ele", proxima: 16 }
    ]
  },
  {
    texto: "Você encontra Erik no parque e ele parece feliz em te ver.",
    visual: "encontro", // 17
    opcoes: [
      { texto: "Conversar com Erik", proxima: 2 }
    ]
  },
  {
    texto: "Você anda pela escola e encontra um grupo de alunos conversando.",
    visual: "patil", // 18
    opcoes: [
      { texto: "Se juntar ao grupo", proxima: 1 },
      { texto: "Continuar andando", proxima: 3 }
    ]
  },
  {
    texto: "Você encontra Erik no parque e ele te entrega um presente.",
    visual: "encontro", // 19
    opcoes: [
      { texto: "Abrir o presente", proxima: 2 },
      { texto: "Agradecer e ir para aula", proxima: 3 }
    ]
  }
];

function mostrarCena(i) {
  const cena = cenas[i];
  dialogo.innerText = cena.texto;
  opcoes.innerHTML = "";
  atualizarVisual(cena.visual); // <- aqui atualiza a imagem
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
    document.getElementById("imagem-personagem").src = "img/erik-parado.png";
  } else if (cenaId === "aula_programacao") {
    document.getElementById("imagem-cenario").src = "img/sala.png";
    document.getElementById("imagem-personagem").src = "img/professor.png";
  } else if (cenaId === "encontro") {
    document.getElementById("imagem-cenario").src = "img/parque.png";
    document.getElementById("imagem-personagem").src = "img/alex_feliz.png";
  } else if (cenaId === "saida-sala") {
    document.getElementById("imagem-cenario").src = "img/escola.png";
    document.getElementById("imagem-personagem").src = "";
  } else if (cenaId === "biblioteca") {
    document.getElementById("imagem-cenario").src = "img/biblioteca.png";
    document.getElementById("imagem-personagem").src = "img/marcos.png";
  } else if (cenaId === "patil") {
    document.getElementById("imagem-cenario").src = "img/biblioteca.png";
    document.getElementById("imagem-personagem").src = "marcos.png";
  }
}

mostrarCena(etapa);
atualizarVisual(cenas[etapa].visual);

