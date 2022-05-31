import sumar from "./sumador";

const num = new sumar();
const Monto = document.querySelector("#venta");
const efectivo = document.querySelector("#montEfectivo");
const form = document.querySelector("#cambio-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(Monto.value);
  const secondNumber = Number.parseInt(efectivo.value);

  div.innerHTML = "<p>" + num.cambio(firstNumber, secondNumber) + "</p>";
});
