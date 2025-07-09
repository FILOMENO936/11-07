// 🌸 Criar pétalas animadas
function criarPetala() {
  const petala = document.createElement('div');
  petala.textContent = '🌸';

  Object.assign(petala.style, {
    position: 'fixed',
    left: `${Math.random() * 100}vw`,
    top: '-30px',
    fontSize: '24px',
    animation: 'fall 5s linear forwards',
    zIndex: 1
  });

  const container = document.getElementById('petalas');
  if (container) {
    container.appendChild(petala);
    setTimeout(() => petala.remove(), 6000);
  }
}

// Ativa o efeito de pétalas
setInterval(criarPetala, 300);

// ✍️ Efeito de digitação de qualquer texto
function digitarTexto(idElemento, texto, velocidade = 50) {
  const alvo = document.getElementById(idElemento);
  if (!alvo) return;

  let i = 0;
  function escrever() {
    if (i < texto.length) {
      alvo.textContent += texto.charAt(i);
      i++;
      setTimeout(escrever, velocidade);
    }
  }
  escrever();
}

// 💌 Mensagem principal da carta
digitarTexto("letra", "Sabes, o amor que sinto por ti é infinito. Mesmo com a distância, tu estás comigo em cada batida do meu coração. Feliz aniversário, minha rainha.");

// 🎂 Mensagem de aniversário (se existir)
digitarTexto("mensagem", "Feliz aniversário, meu amor. Nem mesmo a distância nos separa. Tu estás comigo em cada batida do meu coração.", 60);

// 💖 Coração que se move ao clicar
function ativarCoracaoFlutuante() {
  const heart = document.getElementById("heart");
  if (!heart) return;

  heart.addEventListener("click", () => {
    heart.style.position = "absolute";
    heart.style.left = `${Math.random() * 90}%`;
    heart.style.top = `${Math.random() * 90}%`;
  });
}
ativarCoracaoFlutuante();

// 🔐 Verificação de palavra-chave
function verificaPalavra() {
  const input = document.getElementById("resposta");
  const resultado = document.getElementById("resultado");

  if (!input || !resultado) return;

  const valor = input.value.trim().toLowerCase();
  resultado.textContent = valor === "amor" ? "Acertaste! 💘" : "Tenta outra vez!";
}

// 🎁 Sorteio de desafios amorosos
const desafios = [
  "Diz 3 coisas que ama em mim",
  "Simula um beijo na tela",
  "Escreve uma carta de volta"
];

function sortearDesafio() {
  const elemento = document.getElementById("desafio");
  if (!elemento) return;

  const indice = Math.floor(Math.random() * desafios.length);
  elemento.textContent = desafios[indice];
}

// 💋 Tocar som de beijo
function tocarBeijo() {
  const audio = document.getElementById("audioBeijo");
  if (audio) audio.play();
}

// Torna funções globais (caso chame por HTML)
window.verificaPalavra = verificaPalavra;
window.sortear = sortearDesafio;
window.tocarBeijo = tocarBeijo;
