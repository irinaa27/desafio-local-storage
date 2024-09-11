const data = document.getElementById("data");
const textoGuardado = localStorage.getItem("textoGuardado");

data.textContent = textoGuardado;
