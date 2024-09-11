const inputText = document.getElementById("inputText");
const buttonText = document.getElementById("buttonText");

buttonText.onclick = function () {
  const texto = inputText.value;
  localStorage.setItem("textoGuardado", texto);
};
