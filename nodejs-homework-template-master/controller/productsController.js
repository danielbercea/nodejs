// import (promises as fs) from fs;
// eslint-disable-next-line
import { v4 as uuidv4 } from "uuid";
import Product from "../models/products.js";

const ProductsController = {
  listProducts,
  getProductsById,
  addProduct,
  //   updateProduct,
  //   updateProductPartial,
  deleteProduct,
};

async function listProducts() {
  console.log("--- List Products --- ");
  try {
    return Product.find();
  } catch (error) {
    console.error(error);
  }
}

async function getProductsById(id) {
  console.log(`--- List Products by id #{id} --- `);
  try {
    return Product.findById(id);
  } catch (error) {
    console.error(error);
  }
}

async function addProduct(product) {
  return Product.create(product);
}

// async function updateProduct(updatedProduct, productId) {
//   if (!products.find((product) => product.id === productId)) {
//     throw new Error("Produsul nu a fost gasit.");
//   }

//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === productId) {
//       products[i] = { ...updatedProduct, productId };
//       break;
//     }
//   }

//   // TODO: Adaugare scriere in fisier
// }

// async function updateProductPartial(partialProduct, productId) {
//   if (!products.find((product) => product.id === productId)) {
//     throw new Error("Produsul nu a fost gasit.");
//   }

//   for (let i = 0; i < products.length; i++) {
//     if (products[i].id === productId) {
//       products[i] = { ...products[i], ...partialProduct };
//       break;
//     }
//   }
// }

async function deleteProduct(productId) {
  return Product.findByIdAndDelete(productId);
}

// const getContactById = async (contactId) => {};

// const removeContact = async (contactId) => {};

// const addContact = async (body) => {};

// const updateContact = async (contactId, body) => {};

export default ProductsController;
