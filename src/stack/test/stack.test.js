const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allows to push item", () => {
    stack.push("a");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.pop();
      }).toThrow("Stack is Empty");
    });

    it("returns the last pushed item and remove it from the stack", () => {
      stack.push("a");
      stack.push("b");

      expect(stack.pop()).toBe("b");
      expect(stack.size()).toBe(1);
    });
  });

  describe("peek", () => {
    it("throws an error if stack is empty", () => {
      expect(() => {
        stack.peek();
      }).toThrow("Stack is Empty");
    });

    it("returns the last pushed item but keeps it in the stack", () => {
      stack.push("a");
      stack.push("b");

      expect(stack.peek()).toBe("b");
      expect(stack.size()).toBe(2);
    });
  });
});
