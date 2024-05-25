import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const mood = await rl.question("Ce faci? ");
const name = await rl.question("Cum the cheama? ");
const age = await rl.question("Ce varsta ai? ");

console.log("---");
console.log(`Nume: ${name}, Varsta: ${age}`);
console.log(`Ce face: ${mood}`);

rl.close();
