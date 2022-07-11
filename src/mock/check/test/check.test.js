const check = require("../check");

describe("check", () => {
  let onSuccess;
  let onFail;

  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  });

  it("should call onSuccess when predicate is true", () => {
    check(() => true, onSuccess, onFail);

    // expect(onSuccess.mock.calls.length).toBe(1); // onSuccess 호출 횟수
    expect(onSuccess).toHaveBeenCalledTimes(1); // 위와 동일

    // expect(onSuccess.mock.calls[0][0]).toBe("yes");
    expect(onSuccess).toHaveBeenCalledWith("yes"); // 위와 동일

    expect(onFail).toHaveBeenCalledTimes(0);
  });

  it("should call onSuccess when predicate is false", () => {
    check(() => false, onSuccess, onFail);

    expect(onFail).toHaveBeenCalledWith("no");
    expect(onFail).toHaveBeenCalledTimes(1);
    expect(onSuccess).toHaveBeenCalledTimes(0);
  });
});