/* // COLORS
import colors from "colors";

console.log("hello".green); // outputs green text
console.log("i like cake and pies".underline.red); // outputs red underlined text
console.log("inverse the color".inverse); // inverses the color
console.log("OMG Rainbows!".rainbow); // rainbow
console.log("Run the trap".trap); // Drops the bass
*/

/* // YARGS 
// node test.mjs --ships=4 --distance=22
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const argv = yargs(hideBin(process.argv)).argv;

if (argv.ships > 3 && argv.distance < 53.5) {
  console.log("Plunder more riffiwobbles!");
} else {
  console.log("Retreat from the xupptumblers!");
}
*/

// COMMANDER
// node test.mjs split --separator=, word1,word2,word3
import { Command } from "commander";

const program = new Command();

program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.parse();
