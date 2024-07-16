// CommonJS Module (require)

// Creați un program Node.js care calculează suma, diferența, produsul și
// împărțirea a două numere introduse de la tastatură.
const { isNumber } = require("./utils");

// node index.js 1 2 +
// 3

if (process.argv.length !== 5) {
  console.error("Trebuie introduse 3 variabile!");

  return;
}

if (!isNumber(process.argv[2]) || !isNumber(process.argv[3])) {
  console.error("Nu ai introdus un numar!");

  return;
}

const primulNumar = parseInt(process.argv[2]);
const alDoileaNumar = parseInt(process.argv[3]);
const operatia = process.argv[4];
const result = computeResult();

console.log(`${primulNumar} ${operatia} ${alDoileaNumar} = ${result}`);

/** FUNCTIONS */
function computeResult() {
  switch (operatia) {
    case "+":
      return primulNumar + alDoileaNumar;
    case "-":
      return primulNumar - alDoileaNumar;
    default:
      console.error(`Aceasta operatie ${operatia} nu este cunoscuta.`);
  }
}
