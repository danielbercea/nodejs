import ProductsController from "../../controller/productsController";
import mockingoose from "mockingoose";
import Product from "../../models/products";

describe("ProductsController", () => {
  afterEach(() => {
    mockingoose(Product).reset();
  });

  it("listProducts", async () => {
    const mockProducts = [
      {
        name: "products",
        size: 12,
        type: "shoe",
      },
      {
        name: "productsB",
        size: 12,
        type: "shoe",
      },
    ];

    mockingoose(Product).toReturn(mockProducts, "find");
    const result = await ProductsController.listProducts();
    expect(result.length).toBe(2);
  });
});
