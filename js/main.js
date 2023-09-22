function hideAllFrames() {
  frameSeller.style.display = "none";
  frameDiferimento.style.display = "none";
  frameFSR.style.display = "none";
  frameBUG.style.display = "none";
  frame8.style.display = "none";
  frameArvoreDiv.style.display = "none";
  frameArvore.style.display = "none";
  frame10.style.display = "none";
}

// Vendedor - Post Compra Funcionalidades
const seller = document.getElementById("seller");
const frameSeller = document.getElementById("frameSeller");
const link4 =
  "https://docs.google.com/presentation/d/1v4feoFH7cJHis5elol5IbnrwPR1WYMM0-x3a1nh-ZE8/edit#slide=id.g13ebedf89ed_341_0";
seller.addEventListener("click", () => {
  hideAllFrames();
  frameSeller.style.display = "flex";
  frameSeller.src = link4;
});

// FSR
const menuFSR = document.getElementById("menuFSR");
const frameFSR = document.getElementById("frameFSR");
const link5 =
  "https://docs.google.com/presentation/d/1WfNpp3rs8pTXPV0V4kMZ3wBXetA14exz1pZ26ssyWMc/edit#slide=id.p1";
menuFSR.addEventListener("click", () => {
  hideAllFrames();
  frameFSR.style.display = "flex";
  frameFSR.src = link5;
});

// BUG
const menuBUG = document.getElementById("menuBUG");
const frameBUG = document.getElementById("frameBUG");
const link6 =
  "https://docs.google.com/presentation/d/1YdGGQFKiVCKZh1gKpVyIbCW_C42CWS0DvHgvEtcQihw/edit#slide=id.g22d184d4d76_495_3597";
menuBUG.addEventListener("click", () => {
  hideAllFrames();
  frameBUG.style.display = "flex";
  frameBUG.style.transform = "scale(.1)";
  frameBUG.style.width = "1000vw";
  frameBUG.style.height = "1000vh";
  frameBUG.src = link6;
});

// Outgoing
const nav8 = document.getElementById("nav8");
const frame8 = document.getElementById("frame8");
const frame8frame = document.getElementById("frame8frame");
const link8 =
  "https://docs.google.com/forms/d/e/1FAIpQLSfWz5Kd7r5ADnc_z6z9VwEd1raCPA1IBp6CTcKnZUteehVWAg/viewform";
nav8.addEventListener("click", () => {
  hideAllFrames();
  frame8.style.display = "flex";
  frame8frame.src = link8;
});

// Árvore Transferências
const arvore = document.getElementById("arvore");
const frameArvore = document.getElementById("frameArvore");
const link9 =
  "https://docs.google.com/spreadsheets/d/1gZUzmgcIbUvftx42l_Ws_6zxzxbv1LA1ZN19fwPaEtY/edit#gid=1208426721";
arvore.addEventListener("click", () => {
  hideAllFrames();
  frameArvore.style.display = "flex";
  frameArvore.src = link9;
});

arvore.addEventListener("click", () => {
  hideAllFrames();
  frameArvoreDiv.style.display = "flex";
  frameArvore.style.display = "flex";

  frameArvore.src = link9;

  setTimeout(() => {
    frameArvore.style.position = "absolute";
    frameArvore.style.top = "-6vh";
    frameArvore.style.left = "-0vw";
  }, 3000);
});

// Sauron
const nav10 = document.getElementById("nav10");
const frame10 = document.getElementById("frame10");
const link10 =
  "https://envios.mercadolivre.com.br/logistics/monitoring-distribution/detail/";

nav10.addEventListener("click", () => {
  hideAllFrames();
  frame10.style.display = "flex";
});

const inputField = document.getElementById("inputField");
const frame10frame = document.getElementById("frame10frame");

inputField.addEventListener("paste", (event) => {
  event.preventDefault();
  const pastedText = event.clipboardData.getData("text/plain");
  const numericValue = pastedText.replace(/[^\d]/g, ""); // Remove non-numeric characters
  inputField.value = numericValue;

  inputField.placeholder = "Número colado: " + numericValue;

  frame10frame.src = link10 + numericValue;
  inputField.value = "Link da rota pesquisada: " + link10 + numericValue;
});

inputField.addEventListener("input", () => {
  const numericValue = inputField.value.replace(/[^\d]/g, "");
  inputField.value = numericValue;

  numericValue = "";
});

const diferimento = document.getElementById("diferimento");
const frameDiferimento = document.getElementById("frameDiferimento");
const link11 =
  "https://docs.google.com/spreadsheets/d/1dEEPrRR89lJcgtOOypDYZs5kCl-G90a0ywwt6nEl1PA/edit#gid=1659494052";
diferimento.addEventListener("click", () => {
  hideAllFrames();
  frameDiferimento.style.display = "flex";
  frameDiferimento.src = link11;
  setTimeout(() => {
    frameDiferimento.style.position = "absolute";
    frameDiferimento.style.top = "-20vh";
  }, 5000);
});
