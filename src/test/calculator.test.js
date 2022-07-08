const Calculator = require("../calculator.js");

describe("Calculator", () => {
  let cal;
  beforeEach(() => {
    cal = new Calculator();
  });

  it("inits with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("add", () => {
    cal.set(1);
    cal.add(1);
    expect(cal.value).toBe(2);
  });

  it("subtract", () => {
    cal.set(2);
    cal.subtract(1);
    expect(cal.value).toBe(1);
  });

  it("multiply", () => {
    cal.set(2);
    cal.multiply(1);
    expect(cal.value).toBe(2);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4 / 2 === 2", () => {
      cal.set(4);
      cal.divide(2);
      expect(cal.value).toBe(2);
    });
  });
});
