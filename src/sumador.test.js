import sumar from "./sumador.js";

const frac = new sumar();
describe("Fraccionar", () => {
  it("1.Recibir un monto y devolverlo", () => {
    expect(fraccionar(5)).toEqual(5);
  });
});
