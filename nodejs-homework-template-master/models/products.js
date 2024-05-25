// const fs = require('fs/promises')
import products from "./products.json" assert { type: "json" };

const ProductsService = {
  listProducts,
  getProductsById,
};

async function listProducts() {
  return products;
}

async function getProductsById(id) {
  return products.find((el) => el.id === id);
}

// const getContactById = async (contactId) => {};

// const removeContact = async (contactId) => {};

// const addContact = async (body) => {};

// const updateContact = async (contactId, body) => {};

export default ProductsService;
