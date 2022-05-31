import cambio from "./sumador";

const Monto = document.querySelector("#venta");
const efectivo = document.querySelector("#montEfectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(Monto.value);
  const secondNumber = Number.parseInt(efectivo.value);

  div.innerHTML = "<p>" + cambio(firstNumber, secondNumber) + "</p>";
});
