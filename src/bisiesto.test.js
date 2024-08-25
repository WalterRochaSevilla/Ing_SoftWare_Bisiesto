import es_bisiesto from "./bisiesto";

describe("Bisiesto", () => {
  it("Debería devolver true si es dividendo de 400", () => {
    expect(es_bisiesto(2000)).toEqual(true);
  });
  it("Debería devolver false si es dividendo de 100 pero no de 400", () => {
    expect(es_bisiesto(2100)).toEqual(false);
  });
  it("Debería devolver true si es dividendo de 4 pero no de 100", () => {
    expect(es_bisiesto(2016)).toEqual(true);
  });
});