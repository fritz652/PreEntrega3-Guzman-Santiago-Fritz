const inputElement = document.getElementById("miInput");
const mensajeElement = document.getElementById("mensaje");

inputElement.addEventListener("keyup", function(event) {
  const textoIngresado = event.target.value;
  mensajeElement.textContent =  textoIngresado;
});
