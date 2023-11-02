function hideAllFrames() {
  dProd.style.display = "none";
  fTree.style.display = "none";
  fDife.style.display = "none";
  dSaur.style.display = "none";

  aOutg.classList.remove("activeMenu");
  aTree.classList.remove("activeMenu");
  aSaur.classList.remove("activeMenu");
  aDife.classList.remove("activeMenu");
}

// Outgoing
const aOutg = document.getElementById("aOutg");
const dProd = document.getElementById("dProd");
const fProd = document.getElementById("fProd");
const linkOutg =
  "https://docs.google.com/forms/d/e/1FAIpQLSfWz5Kd7r5ADnc_z6z9VwEd1raCPA1IBp6CTcKnZUteehVWAg/viewform";
aOutg.addEventListener("click", () => {
  hideAllFrames();

  aOutg.classList.add("activeMenu");
  dProd.style.display = "flex";
  fProd.src = linkOutg;
});

// Transferências
const aTree = document.getElementById("aTree");
const fTree = document.getElementById("fTree");
const linkTree =
  "https://docs.google.com/spreadsheets/d/1gZUzmgcIbUvftx42l_Ws_6zxzxbv1LA1ZN19fwPaEtY/edit#gid=1333508592";
aTree.addEventListener("click", () => {
  hideAllFrames();

  aTree.classList.add("activeMenu");
  fTree.style.display = "flex";
  fTree.src = linkTree;
});

// Sauron
const aSaur = document.getElementById("aSaur");
const dSaur = document.getElementById("dSaur");
const linkSaur =
  "https://envios.mercadolivre.com.br/logistics/monitoring-distribution/detail/";

aSaur.addEventListener("click", () => {
  hideAllFrames();

  aSaur.classList.add("activeMenu");
  dSaur.style.display = "flex";
});

const inputField = document.getElementById("inputField");
const fSaur = document.getElementById("fSaur");

inputField.addEventListener("paste", (event) => {
  event.preventDefault();
  const pastedText = event.clipboardData.getData("text/plain");
  const numericValue = pastedText.replace(/[^\d]/g, ""); // Remove non-numeric characters
  inputField.value = numericValue;

  inputField.placeholder = "Número colado: " + numericValue;

  fSaur.src = linkSaur + numericValue;
  inputField.value = "Link da rota pesquisada: " + linkSaur + numericValue;
});

inputField.addEventListener("input", () => {
  const numericValue = inputField.value.replace(/[^\d]/g, "");
  inputField.value = numericValue;

  numericValue = "";
});

// Diferimento
const aDife = document.getElementById("aDife");
const fDife = document.getElementById("fDife");
const linkDife =
  "https://docs.google.com/spreadsheets/d/1dEEPrRR89lJcgtOOypDYZs5kCl-G90a0ywwt6nEl1PA/edit#gid=1659494052";
aDife.addEventListener("click", () => {
  hideAllFrames();

  aDife.classList.add("activeMenu");
  fDife.style.display = "flex";
  fDife.src = linkDife;
});
