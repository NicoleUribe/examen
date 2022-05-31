import sumar from "./sumador.js";

const frac = new sumar();
describe("Fraccionar", () => {
  it("1.Recibir un monto y devolverlo", () => {
    expect(frac.fraccionar(5)).toEqual("5,");
  });
  it("2.Recibir un monto de 10 y devolvera 5,5", () => {
    expect(frac.fraccionar(10)).toEqual("5,5,");
  });
  it("3.Recibir un monto de 12 y devolvera 5,5,2,", () => {
    expect(frac.fraccionar(12)).toEqual("5,5,2,");
  });
});
