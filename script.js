/* script.js */
setInterval(() => {
  const petala = document.createElement('div');
  petala.textContent = '🌸';
  petala.style.position = 'fixed';
  petala.style.left = Math.random() * 100 + 'vw';
  petala.style.top = '-30px';
  petala.style.fontSize = '24px';
  petala.style.animation = 'fall 5s linear forwards';
  document.getElementById('petalas')?.appendChild(petala);
  setTimeout(() => petala.remove(), 6000);
}, 300);

const texto = "Sabes, o amor que sinto por ti é infinito. Mesmo com a distância, tu estás comigo em cada batida do meu coração. Feliz aniversário, minha rainha.";
let i = 0;
function digita() {
  if (i < texto.length) {
    document.getElementById("letra").textContent += texto.charAt(i);
    i++;
    setTimeout(digita, 50);
  }
}
document.getElementById("letra") && digita();

const heart = document.getElementById("heart");
if (heart) {
  heart.addEventListener("click", () => {
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 90 + "%";
    heart.style.top = Math.random() * 90 + "%";
  });
}

function verificaPalavra() {
  const resposta = document.getElementById("resposta").value.toLowerCase();
  document.getElementById("resultado").textContent = resposta === "amor" ? "Acertaste!" : "Tenta outra vez!";
}

const desafios = ["Diz 3 coisas que ama em mim", "Simula um beijo na tela", "Escreve uma carta de volta"];
function sortear() {
  const indice = Math.floor(Math.random() * desafios.length);
  document.getElementById("desafio").textContent = desafios[indice];
}

const msg = "Feliz aniversário, meu amor. Nem mesmo a distância nos separa. Tu estás comigo em cada batida do meu coração.";
let j = 0;
if (document.getElementById("mensagem")) {
  const escrever = () => {
    if (j < msg.length) {
      document.getElementById("mensagem").textContent += msg.charAt(j);
      j++;
      setTimeout(escrever, 60);
    }
  };
  escrever();
}

function tocarBeijo() {
  document.getElementById("audioBeijo").play();
}
