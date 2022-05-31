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
});