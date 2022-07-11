// mock을 남용하는 사례

const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");
jest.mock("../product_client");

describe("ProductService", () => {
  // productService 내부에서 ProductClient를 사용하니까 productClient를 mock으로 사용한다.

  const fetchItems = jest.fn(async () => [
    { item: "🥛", available: true },
    { item: "🍌", available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });
  let productService;

  beforeEach(() => {
    productService = new ProductService();
    fetchItems.mockClear();
    ProductClient.mockClear();
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "🥛", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
