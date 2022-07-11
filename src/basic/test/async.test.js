const fetchProduct = require("../async.js");

describe("Async", () => {
  it("async - done", (done) => {
    // done을 해줘야 then에서 실패한것에 대해 실패라고 결과가 나옴
    // 추천하는 방식 x. return이나 async await 사용할 것
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  it("async - return", () => {
    // done 방법보다는 추천하는 방법
    // 비동기이기 때문에 return을 붙여주기
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  it("async - await", async () => {
    // done 방법보다는 추천하는 방법
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  it("async - resolves", () => {
    // 성공할 경우
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  it("async - rejects", () => {
    // 실패할 경우
    return expect(fetchProduct("error")).rejects.toBe("network error");
  });
});
