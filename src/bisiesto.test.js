import es_bisiesto from "./bisiesto";

describe("Bisiesto", () => {
  it("Debería devolver bisiesto si es dividendo de 400", () => {
    expect(es_bisiesto(2000)).toEqual(true);
  });
});