function hideAllFrames() {
  frameDiferimento.style.display = "none";
  frame8.style.display = "none";
  frameArvore.style.display = "none";
  frame10.style.display = "none";
}

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

// Transferências
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
  frameArvore.style.display = "flex";

  frameArvore.src = link9;

  setTimeout(() => {
    frameArvore.style.position = "absolute";
    frameArvore.style.top = "-6vh";
    frameArvore.style.left = "4vw";
  }, 2000);
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
});
