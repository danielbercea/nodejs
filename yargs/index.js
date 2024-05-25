console.log("Yargs");
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

const folder = argv.folder;
const file = argv.file;

console.log(`This will copy file ${file} into ${folder}`);
