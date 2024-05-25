import { readFile, writeFile } from "node:fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";
import colors from "colors";
import { randomUUID } from "node:crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const productsPath = `${__dirname}\\db\\products.json`;

// CRUD
//getProducts();
// createProduct({
//   name: "Jordan - Red",
//   size: 40,
//   type: "shoe",
// });

// Read
export async function getProducts() {
  try {
    //console.log("GET Products".bgBlue);
    const contents = await readFile(productsPath, { encoding: "utf8" });
    const products = JSON.parse(contents);

    console.table(products);
  } catch (error) {
    console.log("There is an error".bgRed.white);
    console.error(error);
  }
}

// Create
/*
  {
    "name": "Nike Air Max - Blue/Royal Purple",
    "size": 46,
    "type": "shoe"
  }
*/
export async function createProduct(product) {
  try {
    const contents = await readFile(productsPath, { encoding: "utf8" });
    const products = JSON.parse(contents);
    const newProductId = randomUUID();
    const isValid = product?.name && product?.size && product?.type;
    if (!isValid) {
      throw new Error("The product does not have all required parameters!");
    }
    const newProduct = {
      id: newProductId,
      ...product,
    };

    products.push(newProduct);
    const parsedProducts = JSON.stringify(products);
    await writeFile(productsPath, parsedProducts);

    console.log("The product has been created succesfully".bgGreen);
  } catch (error) {
    console.log("There is an error".bgRed.white);
    console.error(error);
  }
}

// Update

// Delete

// https://immerjs.github.io/immer/update-patterns/
