import fs from "fs";

describe("Cambio de venta", () => {
  beforeAll(() => {
    document.body.innerHTML = fs.readFileSync("index.html", "utf8");
    require("./presenter.js");
  });
  it("Si el monto ingresado es 0 debe ser recuperado", () => {
    const monto = document.querySelector("#monto");
    const cambio = document.querySelector("#botonCambio");
    cambio.click();
    expect(monto.innerHTML).toEqual("0");
  });
  it("Si el monto ingresado es 10 y el efecftivo 15 debe ser devuelto 5 ", () => {
    const monto = document.querySelector("#monto");
    const cambio = document.querySelector("#botonCambio");
    cambio.click();
    expect(div.innerHTML).toEqual("5");
  });
});