import { createProduct, getProducts } from "./productsService.js";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

const action = argv.action;

switch (action) {
  case "list":
    getProducts();

    break;
  case "add":
    const hasAllArguments = argv.name && argv.type && argv.size;

    if (!hasAllArguments) {
      console.log(
        `For adding an item we need 'name', 'type' and 'size'.`.bgRed
      );
    }

    const product = {
      name: argv.name,
      size: parseInt(argv.size),
      type: argv.type,
    };

    createProduct(product);

    break;
  default:
    console.log(`This command ${action} is not supported`.bgYellow);
}

/*
node index.js --action list
node index.js --action add --name Mango --type shoes --size 46
*/
